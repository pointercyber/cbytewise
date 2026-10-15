import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, ChevronDown,
  ChevronLeft, ChevronRight, Clock3, GraduationCap, Lightbulb, ListChecks,
  Search, Shuffle, Sparkles, TimerReset, XCircle, RotateCcw, ExternalLink,
  BookMarked, CircleHelp, Home, PanelTop
} from 'lucide-react';
import { modules, quizBank, paperReferences, referenceSources } from './data.js';

function CoffeeIcon() { return <span aria-hidden="true" className="creator-link-icon">☕</span>; }
function GithubIcon() { return <span aria-hidden="true" className="creator-link-icon">↗</span>; }

const SPONSOR_URL = 'https://asiafilm.org/4/4b6e048ccb2dc231ce14652d462d8899';
const moduleNames = Object.fromEntries(modules.map(m => [m.id, m.title]));

function SponsorCard({ onContinue, onVisit, visited }) {
  return <div className="sponsor-screen">
    <div className="sponsor-card">
      <div className="eyebrow"><span className="sponsor-dot"/> REQUIRED SPONSOR VISIT</div>
      <h2>Support this free study tool.</h2>
      <p>Open the sponsor website in a new tab. After visiting, return here and continue to your study guide or quiz.</p>
      <div className="sponsor-domain"><ExternalLink size={17}/> asiafilm.org</div>
      <div className="sponsor-actions">
        <a className="button button-primary" href={SPONSOR_URL} target="_blank" rel="noopener noreferrer" onClick={onVisit}>Visit sponsor <ArrowRight size={16}/></a>
        <button className="button button-quiet" onClick={onContinue} disabled={!visited}>I've visited — continue</button>
      </div>
      <small>The continue button unlocks after you click the sponsor link. This site can require the click, but cannot independently verify activity on the external website.</small>
    </div>
  </div>;
}

function App() {
  const [mode, setMode] = useState('choose');
  const [showSponsor, setShowSponsor] = useState(false);
  const [sponsorVisited, setSponsorVisited] = useState(false);
  const [pendingMode, setPendingMode] = useState('study');
  const [search, setSearch] = useState('');
  const [activeModule, setActiveModule] = useState('all');
  const [openItems, setOpenItems] = useState({});
  const [quizSettings, setQuizSettings] = useState({ module: 'all', count: '15', time: '20', shuffle: true, explanations: true });
  const [quiz, setQuiz] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [toast, setToast] = useState('');
  const timerRef = useRef(null);

  const filteredModules = useMemo(() => modules
    .filter(m => activeModule === 'all' || m.id === activeModule)
    .map(m => ({ ...m, questions: m.questions.filter(q =>
      !search || `${q.question} ${q.answer} ${q.part} ${q.reference || ''}`.toLowerCase().includes(search.toLowerCase())
    ) })).filter(m => m.questions.length), [activeModule, search]);

  const startMode = (next) => {
    setPendingMode(next);
    setSponsorVisited(false);
    setShowSponsor(true);
  };

  const continueFromSponsor = () => {
    if (!sponsorVisited) return;
    setShowSponsor(false);
    setMode(pendingMode);
  };

  const startQuiz = () => {
    let pool = quizBank.filter(q => quizSettings.module === 'all' || q.module === quizSettings.module);
    if (quizSettings.shuffle) pool = [...pool].sort(() => Math.random() - 0.5);
    const count = quizSettings.count === 'all' ? pool.length : Number(quizSettings.count);
    pool = pool.slice(0, count).map(q => {
      const opts = q.options.map((label, i) => ({ label, correct: i === q.answer }));
      if (quizSettings.shuffle) opts.sort(() => Math.random() - 0.5);
      return { ...q, options: opts };
    });
    setQuiz(pool); setCurrent(0); setAnswers({}); setSubmitted(false); setReviewOpen(false); setShowHint(false); setMode('quiz');
    const seconds = Number(quizSettings.time) * 60;
    setSecondsLeft(seconds); setStartedAt(Date.now()); setMode('quiz');
  };

  const submitQuiz = () => { setSubmitted(true); clearInterval(timerRef.current); setReviewOpen(false); };
  useEffect(() => {
    if (mode !== 'quiz' || submitted || secondsLeft <= 0) return;
    if (Number(quizSettings.time) === 0) return;
    timerRef.current = setInterval(() => setSecondsLeft(s => {
      if (s <= 1) { clearInterval(timerRef.current); setSubmitted(true); return 0; }
      return s - 1;
    }), 1000);
    return () => clearInterval(timerRef.current);
  }, [mode, submitted, quizSettings.time]);
  useEffect(() => () => clearInterval(timerRef.current), []);

  const score = quiz.reduce((sum, q, i) => sum + (answers[i] !== undefined && q.options[answers[i]].correct ? 1 : 0), 0);
  const skipped = quiz.filter((q, i) => answers[i] === undefined).length;
  const wrong = quiz.length - score - skipped;
  const elapsed = startedAt ? Math.floor(((submitted ? Date.now() : Date.now()) - startedAt) / 1000) : 0;
  const timeLabel = (n) => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`;
  const activeQ = quiz[current];

  const backHome = () => { clearInterval(timerRef.current); setMode('choose'); setShowSponsor(false); setSubmitted(false); };
  const startOver = () => { setMode('quizSetup'); setSubmitted(false); };
  const changeSetting = (key, value) => setQuizSettings(prev => ({ ...prev, [key]: value }));

  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={backHome} aria-label="Go home">
        <span className="brand-mark"><GraduationCap size={20}/></span>
        <span>cbytewise<span className="brand-dot">.</span></span>
      </button>
      <div className="topbar-right">
        <span className="topbar-caption">PROGRAMMING IN C</span>
        {mode !== 'choose' && <button className="icon-button" onClick={backHome} aria-label="Home"><Home size={18}/></button>}
      </div>
    </header>

    {showSponsor ? <main className="main-content"><SponsorCard onContinue={continueFromSponsor} onVisit={() => setSponsorVisited(true)} visited={sponsorVisited}/></main> : <>
      {mode === 'choose' && <main className="main-content">
        <section className="hero">
          <div className="eyebrow"><span className="eyebrow-line"/> YOUR EXAM PREP SPACE</div>
          <h1>Understand it.<br/><span>Then prove it.</span></h1>
          <p className="hero-copy">A focused C programming revision space built from your module notes, practical programs and 2022–2025 diploma question papers.</p>
          <div className="hero-meta"><span><BookOpen size={16}/>{modules.reduce((n,m)=>n+m.questions.length,0)} study answers</span><span><ListChecks size={16}/>{quizBank.length} quiz questions</span><span><Clock3 size={16}/> Timed practice</span></div>
        </section>
        <section className="mode-grid">
          <button className="mode-card study-card" onClick={() => startMode('study')}>
            <div className="mode-card-top"><span className="mode-icon"><BookMarked size={24}/></span><span className="mode-arrow"><ArrowUpRightIcon/></span></div>
            <div className="mode-label">MODE 01</div><h2>Study mode</h2>
            <p>Read simple, exam-ready answers. Search by topic and open only the explanations you need.</p>
            <div className="mode-card-bottom"><span>Browse all modules</span><ArrowRight size={17}/></div>
          </button>
          <button className="mode-card quiz-card" onClick={() => startMode('quizSetup')}>
            <div className="mode-card-top"><span className="mode-icon"><ListChecks size={24}/></span><span className="mode-arrow"><ArrowUpRightIcon/></span></div>
            <div className="mode-label">MODE 02</div><h2>Simulated quiz</h2>
            <p>Choose options, beat the timer, track your score and review every answer after submission.</p>
            <div className="mode-card-bottom"><span>Set up a quiz</span><ArrowRight size={17}/></div>
          </button>
        </section>
        <div className="bottom-note"><Sparkles size={15}/> Start with study mode if you’re learning a topic for the first time.</div>
        <section className="paper-reference-section"><div className="eyebrow">SOURCE MATERIAL</div><h2>Past papers, built into revision.</h2><p>Question references are attached to study answers wherever a question comes from an uploaded paper.</p><div className="paper-reference-grid">{paperReferences.map(p => <article className="paper-reference-card" key={p.year}><span className="paper-year">{p.year}</span><h3>{p.title}</h3><p>{p.note}</p><small>Reference file: {p.file}</small><a className="reference-open-link" href={`/references/${encodeURIComponent(p.file)}`} target="_blank" rel="noopener noreferrer">Open question paper <ExternalLink size={13}/></a></article>)}</div><div className="source-note">Module 2: Arrays · Module 3: Pointers · Module 4: Structure and File. Module 1 coverage is based on the uploaded exam questions because a separate Module 1 notes PDF was not included.</div><div className="source-list-heading"><h3>All uploaded study references</h3><span>{referenceSources.length} source files</span></div><div className="reference-source-list">{referenceSources.map((source,i)=><article className="reference-source-row" key={source.file}><span className="source-index">{String(i+1).padStart(2,'0')}</span><div><strong>{source.title}</strong><p>{source.topics}</p><small>{source.kind} · {source.file}</small><a className="reference-open-link" href={`/references/${encodeURIComponent(source.file)}`} target="_blank" rel="noopener noreferrer">Open source PDF <ExternalLink size={13}/></a></div></article>)}</div></section>
        <footer className="page-footer"><span>Built for focused C programming revision.</span><span>Developed by <strong className="developer-credit">Kalidas R</strong> · C Programming · Modules 01–04 · <a className="source-link" href="https://github.com/pointercyber" target="_blank" rel="noopener noreferrer">Source code</a></span><nav className="creator-links" aria-label="Creator links"><a href="https://www.buymeacoffee.com/kalidasr" target="_blank" rel="noopener noreferrer"><CoffeeIcon/> Buy me a coffee</a><a href="https://github.com/pointercyber" target="_blank" rel="noopener noreferrer"><GithubIcon/> GitHub profile</a></nav></footer>
      </main>}

      {mode === 'study' && <main className="main-content study-page">
        <div className="page-heading"><div><div className="eyebrow">MODE 01 · LEARN AT YOUR PACE</div><h1>Study guide<span className="brand-dot">.</span></h1><p>Open a question to reveal a clear, exam-ready answer.</p></div><button className="button button-outline" onClick={() => setMode('quizSetup')}>Take a quiz <ArrowRight size={16}/></button></div>
        <div className="study-toolbar">
          <label className="searchbox"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search a question, term or answer…"/>{search && <button onClick={() => setSearch('')} aria-label="Clear search"><XCircle size={16}/></button>}</label>
          <div className="module-tabs">
            {[['all','All modules'], ...modules.map(m => [m.id, `Module ${m.id.slice(1)}`])].map(([v,label]) => <button key={v} className={activeModule===v?'active':''} onClick={() => setActiveModule(v)}>{label}</button>)}
          </div>
        </div>
        <div className="study-summary"><span>{filteredModules.reduce((n,m)=>n+m.questions.length,0)} questions shown</span><button onClick={() => {const next={};filteredModules.forEach(m=>m.questions.forEach(q=>next[q.question]=true));setOpenItems(next);}}>Expand all</button><button onClick={() => setOpenItems({})}>Collapse all</button></div>
        {filteredModules.length ? filteredModules.map(m => <section className="study-module" key={m.id}>
          <div className="study-module-head"><span className="module-code">{m.id.toUpperCase()}</span><div><h2>{m.title}</h2><p>{m.subtitle}</p></div><span className="question-count">{m.questions.length} Qs</span></div>
          {['Part A — 1-mark questions','Part B — 3-mark questions','Part C — 7-mark questions'].map(part => {
            const list = m.questions.filter(q => q.part === part);
            if (!list.length) return null;
            return <div className="study-part" key={part}><h3>{part}</h3>{list.map((q,i) => <details key={q.question} className="study-item" open={!!openItems[q.question]} onToggle={e => { e.stopPropagation(); }}>
              <summary onClick={e => { e.preventDefault(); setOpenItems(prev => ({...prev, [q.question]: !prev[q.question]})); }}><span className="question-number">{String(i+1).padStart(2,'0')}</span><span className="question-title">{q.question}</span><ChevronDown className="question-chevron" size={18}/></summary>
              <div className="answer-content">{q.answer.split('\n').map((line,j)=><p key={j}>{line || <br/>}</p>)}{q.reference && <div className="answer-reference"><BookMarked size={14}/><span>Reference: {q.reference}</span></div>}</div>
            </details>)}</div>;
          })}
        </section>) : <div className="empty-state"><Search size={26}/><h3>No matching questions</h3><p>Try another search or choose a different module.</p></div>}
        <footer className="page-footer"><button className="text-button" onClick={backHome}><ArrowLeft size={16}/> Back to home</button><span>Developed by <strong className="developer-credit">Kalidas R</strong></span><nav className="creator-links" aria-label="Creator links"><a href="https://www.buymeacoffee.com/kalidasr" target="_blank" rel="noopener noreferrer"><CoffeeIcon/> Buy me a coffee</a><a href="https://github.com/pointercyber" target="_blank" rel="noopener noreferrer"><GithubIcon/> GitHub profile</a></nav></footer>
      </main>}

      {mode === 'quizSetup' && <main className="main-content setup-page">
        <button className="back-link" onClick={backHome}><ArrowLeft size={16}/> Back to mode selection</button>
        <div className="setup-intro"><div className="eyebrow">MODE 02 · TEST YOURSELF</div><h1>Build your<br/><span>quiz session.</span></h1><p>Set your conditions. The quiz starts when you’re ready.</p></div>
        <section className="setup-card">
          <div className="setup-card-heading"><span className="mode-icon"><ListChecks size={22}/></span><div><h2>Quiz settings</h2><p>{quizBank.length} multiple-choice questions in the practice bank</p></div></div>
          <div className="form-grid">
            <label>Module<select value={quizSettings.module} onChange={e=>changeSetting('module',e.target.value)}><option value="all">All modules</option>{modules.map(m=><option key={m.id} value={m.id}>{m.title}</option>)}</select></label>
            <label>Question count<select value={quizSettings.count} onChange={e=>changeSetting('count',e.target.value)}><option value="10">10 questions</option><option value="15">15 questions</option><option value="30">30 questions</option><option value="all">All available for selected module</option></select></label>
            <label>Time limit<select value={quizSettings.time} onChange={e=>changeSetting('time',e.target.value)}><option value="0">No time limit</option><option value="10">10 minutes</option><option value="20">20 minutes</option><option value="30">30 minutes</option></select></label>
            <div className="setting-checks"><label className="check-row"><input type="checkbox" checked={quizSettings.shuffle} onChange={e=>changeSetting('shuffle',e.target.checked)}/><span><strong><Shuffle size={15}/> Shuffle questions and options</strong><small>Get a different order each attempt.</small></span></label><label className="check-row"><input type="checkbox" checked={quizSettings.explanations} onChange={e=>changeSetting('explanations',e.target.checked)}/><span><strong><Lightbulb size={15}/> Show explanations</strong><small>See why the correct answer is right.</small></span></label></div>
          </div>
          <div className="quiz-ready"><div><strong>{quizSettings.count==='all' ? quizBank.filter(q=>quizSettings.module==='all'||q.module===quizSettings.module).length : Math.min(Number(quizSettings.count), quizBank.filter(q=>quizSettings.module==='all'||q.module===quizSettings.module).length)} questions</strong><span>{quizSettings.time==='0'?'No timer':`${quizSettings.time} minute timer`} · Single best answer</span></div><button className="button button-primary" onClick={startQuiz}>Start quiz <ArrowRight size={17}/></button></div>
        </section>
        <div className="setup-footnote"><CircleHelp size={16}/> You can change answers and move between questions until you submit.</div>
        <footer className="page-footer"><span>Programming in C · Exam prep</span><span>Developed by <strong className="developer-credit">Kalidas R</strong></span><nav className="creator-links" aria-label="Creator links"><a href="https://www.buymeacoffee.com/kalidasr" target="_blank" rel="noopener noreferrer"><CoffeeIcon/> Buy me a coffee</a><a href="https://github.com/pointercyber" target="_blank" rel="noopener noreferrer"><GithubIcon/> GitHub profile</a></nav></footer>
      </main>}

      {mode === 'quiz' && !submitted && activeQ && <main className="main-content quiz-page">
        <div className="quiz-topline"><button className="back-link" onClick={backHome}><ArrowLeft size={16}/> Exit quiz</button><span className="quiz-mode-pill"><span className="live-dot"/> SIMULATED EXAM</span></div>
        <div className="quiz-progress-head"><div><span className="eyebrow">{moduleNames[activeQ.module]}</span><h1>Question <span>{current+1}</span><small> / {quiz.length}</small></h1></div><div className={`timer ${Number(quizSettings.time)>0 && secondsLeft<61?'timer-danger':''}`}><Clock3 size={17}/>{Number(quizSettings.time)===0?'Untimed':timeLabel(secondsLeft)}</div></div>
        <div className="progress-track"><div className="progress-fill" style={{width:`${((current+1)/quiz.length)*100}%`}}/></div>
        <section className="question-card">
          <div className="question-card-top"><span>QUESTION {String(current+1).padStart(2,'0')}</span><span>{answers[current]===undefined?'Not answered':'Answer selected'}</span></div>
          <h2>{activeQ.question}</h2>{activeQ.reference && <p className="question-source">Source: {activeQ.reference}</p>}
          <div className="option-list">{activeQ.options.map((o,i)=><button key={o.label} className={`quiz-option ${answers[current]===i?'selected':''}`} onClick={()=>setAnswers(prev=>({...prev,[current]:i}))}><span className="option-letter">{String.fromCharCode(65+i)}</span><span>{o.label}</span>{answers[current]===i&&<Check size={17} className="option-check"/>}</button>)}</div>
          <div className="hint-row">{showHint?<div className="hint-box"><Lightbulb size={17}/><span>{activeQ.hint}</span></div>:<button className="text-button" onClick={()=>setShowHint(true)}><Lightbulb size={16}/> Need a hint?</button>}</div>
        </section>
        <div className="quiz-navigation"><button className="button button-outline" disabled={current===0} onClick={()=>{setCurrent(c=>c-1);setShowHint(false)}}><ChevronLeft size={17}/> Previous</button><div className="question-jump">{quiz.map((q,i)=><button key={q.id} aria-label={`Go to question ${i+1}`} title={`Question ${i+1}`} className={`${i===current?'current':''} ${answers[i]!==undefined?'answered':''}`} onClick={()=>{setCurrent(i);setShowHint(false)}}>{i+1}</button>)}</div>{current<quiz.length-1?<button className="button button-primary" onClick={()=>{setCurrent(c=>c+1);setShowHint(false)}}>Next <ChevronRight size={17}/></button>:<button className="button button-primary" onClick={()=>{if(window.confirm(`Submit quiz? ${Object.keys(answers).length} of ${quiz.length} answered.`))submitQuiz()}}>Submit quiz <CheckCircle2 size={17}/></button>}</div>
        <div className="quiz-bottom-note"><span>{Object.keys(answers).length} of {quiz.length} answered</span><button className="text-button" onClick={()=>{if(window.confirm('Submit your quiz now?'))submitQuiz()}}>Finish early</button></div>
        <footer className="page-footer"><span>C Programming · Simulated exam</span><span>Developed by <strong className="developer-credit">Kalidas R</strong></span><nav className="creator-links" aria-label="Creator links"><a href="https://www.buymeacoffee.com/kalidasr" target="_blank" rel="noopener noreferrer"><CoffeeIcon/> Buy me a coffee</a><a href="https://github.com/pointercyber" target="_blank" rel="noopener noreferrer"><GithubIcon/> GitHub profile</a></nav></footer>
      </main>}

      {mode === 'quiz' && submitted && <main className="main-content results-page">
        <div className="result-hero"><div className="result-icon"><CheckCircle2 size={28}/></div><div className="eyebrow">SESSION COMPLETE</div><h1>{score/quiz.length>=.8?'You’re getting sharp.':score/quiz.length>=.5?'Good progress. Keep going.':'Every attempt teaches you something.'}</h1><p>Your result is ready. Review the answers, learn from the misses, and take another run.</p>
          <div className="score-display"><strong>{Math.round(score/quiz.length*100)}<small>%</small></strong><span>{score} correct out of {quiz.length}</span></div>
        </div>
        <div className="result-stat-grid"><div><span className="stat-icon green"><CheckCircle2 size={18}/></span><strong>{score}</strong><small>Correct</small></div><div><span className="stat-icon red"><XCircle size={18}/></span><strong>{wrong}</strong><small>Incorrect</small></div><div><span className="stat-icon gray"><CircleHelp size={18}/></span><strong>{skipped}</strong><small>Unanswered</small></div><div><span className="stat-icon blue"><Clock3 size={18}/></span><strong>{Number(quizSettings.time)===0?'—':timeLabel(Math.max(0,Number(quizSettings.time)*60-secondsLeft))}</strong><small>Time used</small></div></div>
        <div className="result-actions"><button className="button button-primary" onClick={()=>setReviewOpen(v=>!v)}>{reviewOpen?'Hide answer review':'Review answers'} <ArrowRight size={16}/></button><button className="button button-outline" onClick={startQuiz}><RotateCcw size={16}/> Try again</button><button className="button button-quiet" onClick={startOver}>New quiz</button></div>
        {reviewOpen && <section className="review-list"><div className="review-heading"><h2>Answer review</h2><span>{quiz.length} questions</span></div>{quiz.map((q,i)=>{const selected=answers[i];const correct=q.options.find(o=>o.correct);const ok=selected!==undefined&&q.options[selected].correct;return <article key={q.id} className={`review-card ${selected===undefined?'skipped':ok?'correct':'wrong'}`}><div className="review-card-title"><span>Q{i+1}</span><h3>{q.question}</h3><span className="review-status">{selected===undefined?'Skipped':ok?'Correct':'Incorrect'}</span></div><p><strong>Your answer:</strong> {selected===undefined?'Not answered':q.options[selected].label}</p><p><strong>Correct answer:</strong> {correct.label}</p>{quizSettings.explanations&&<p className="review-explanation">{q.explanation}</p>}{q.reference&&<p className="review-source">Source: {q.reference}</p>}</article>})}</section>}
        <div className="results-bottom"><button className="text-button" onClick={backHome}><ArrowLeft size={16}/> Back to home</button><button className="text-button" onClick={()=>setMode('study')}>Review study guide <BookOpen size={16}/></button></div>
        <footer className="page-footer"><span>Keep learning, one question at a time.</span><span>Developed by <strong className="developer-credit">Kalidas R</strong></span><nav className="creator-links" aria-label="Creator links"><a href="https://www.buymeacoffee.com/kalidasr" target="_blank" rel="noopener noreferrer"><CoffeeIcon/> Buy me a coffee</a><a href="https://github.com/pointercyber" target="_blank" rel="noopener noreferrer"><GithubIcon/> GitHub profile</a></nav></footer>
      </main>}
    </>}
  </div>;
}

function ArrowUpRightIcon() {
  return <ArrowRight size={18} style={{transform:'rotate(-45deg)'}}/>;
}

export default App;
