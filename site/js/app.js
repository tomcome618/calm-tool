// ============================================
// CalmTool — Interactive Tools
// ============================================

// === Breathing Exercise ===
(function() {
  const circle = document.getElementById('breathe-circle');
  const instruction = document.getElementById('breathe-instruction');
  const roundsEl = document.getElementById('breathe-rounds');
  const durationEl = document.getElementById('breathe-duration');
  const startBtn = document.getElementById('breathe-start');
  const pauseBtn = document.getElementById('breathe-pause');
  const resetBtn = document.getElementById('breathe-reset');
  if (!circle) return;

  const patterns = {
    '4-7-8':   { name:'4-7-8 Relaxation', inhale:4, hold1:7, exhale:8, hold2:0 },
    'box':     { name:'Box Breathing',     inhale:4, hold1:4, exhale:4, hold2:4 },
    'simple':  { name:'Simple Calm',       inhale:4, hold1:2, exhale:6, hold2:0 },
    'custom':  { name:'Custom',            inhale:4, hold1:0, exhale:4, hold2:0 }
  };
  let current = patterns['4-7-8'];
  let phase = 'inhale'; // inhale | hold1 | exhale | hold2
  let timer = null, round = 0, running = false;
  let customInhale = 4, customHold = 0, customExhale = 4;

  function setPattern(key) {
    if (key === 'custom') {
      current = { name:'Custom', inhale:customInhale, hold1:customHold, exhale:customExhale, hold2:0 };
    } else {
      current = patterns[key];
    }
    reset();
    document.querySelectorAll('.pattern-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-pattern="${key}"]`).classList.add('active');
  }

  function updatePhase(p) {
    phase = p;
    circle.className = 'breathe-circle ' + (p === 'inhale' ? 'inhale' : p === 'exhale' ? 'exhale' : 'hold');
    const labels = { inhale:'Breathe in...', hold1:'Hold...', exhale:'Breathe out...', hold2:'Hold...' };
    instruction.textContent = labels[p];
    let seconds = p === 'inhale' ? current.inhale : p === 'hold1' ? current.hold1 : p === 'exhale' ? current.exhale : current.hold2;
    if (seconds <= 0) { advance(); return; }
    let count = seconds;
    instruction.textContent = labels[p] + ' ' + count;
    timer = setInterval(() => {
      count--;
      if (count <= 0) { clearInterval(timer); advance(); return; }
      instruction.textContent = labels[p] + ' ' + count;
    }, 1000);
  }

  function advance() {
    clearInterval(timer);
    if (phase === 'inhale') updatePhase(current.hold1 > 0 ? 'hold1' : 'exhale');
    else if (phase === 'hold1') updatePhase('exhale');
    else if (phase === 'exhale') {
      if (current.hold2 > 0) updatePhase('hold2');
      else { round++; roundsEl.textContent = round; updatePhase('inhale'); }
    } else if (phase === 'hold2') { round++; roundsEl.textContent = round; updatePhase('inhale'); }
  }

  function start() {
    if (running) return;
    running = true;
    if (round === 0) { round = 1; roundsEl.textContent = '1'; }
    updatePhase('inhale');
    startBtn.textContent = 'Running...';
  }

  function pause() {
    running = false;
    clearInterval(timer);
    circle.className = 'breathe-circle';
    instruction.textContent = 'Paused';
    startBtn.textContent = 'Resume';
  }

  function reset() {
    running = false;
    clearInterval(timer);
    round = 0;
    circle.className = 'breathe-circle';
    instruction.textContent = 'Press Start to begin';
    roundsEl.textContent = '0';
    startBtn.textContent = 'Start';
  }

  document.querySelectorAll('.pattern-btn').forEach(btn => {
    btn.addEventListener('click', () => setPattern(btn.dataset.pattern));
  });
  startBtn.addEventListener('click', () => { if (!running) start(); else { pause(); running=false; startBtn.textContent='Resume'; } });
  pauseBtn.addEventListener('click', pause);
  resetBtn.addEventListener('click', reset);

  if (document.getElementById('custom-inhale')) {
    ['inhale','hold','exhale'].forEach(t => {
      const el = document.getElementById('custom-'+t);
      if (el) el.addEventListener('input', () => {
        customInhale = parseInt(document.getElementById('custom-inhale').value) || 4;
        customHold = parseInt(document.getElementById('custom-hold').value) || 0;
        customExhale = parseInt(document.getElementById('custom-exhale').value) || 4;
        current = { name:'Custom', inhale:customInhale, hold1:customHold, exhale:customExhale, hold2:0 };
        reset();
      });
    });
  }
})();

// === FAQ Accordion ===
(function() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      if (!isOpen) answer.classList.add('open');
    });
  });
})();

// === Burnout Assessment ===
(function() {
  const container = document.getElementById('assessment-container');
  if (!container) return;

  const questions = [
    { id:'q1', section:'A', text:'I feel emotionally drained by my work.' },
    { id:'q2', section:'A', text:'I feel used up at the end of the workday.' },
    { id:'q3', section:'A', text:'I feel fatigued when I get up and have to face another day.' },
    { id:'q4', section:'A', text:'Working with people all day is a real strain for me.' },
    { id:'q5', section:'A', text:'I feel burned out from my work.' },
    { id:'q6', section:'B', text:'I have become less interested in my work since I started.' },
    { id:'q7', section:'B', text:'I have become less enthusiastic about my work.' },
    { id:'q8', section:'B', text:'I just want to do my job and not be bothered.' },
    { id:'q9', section:'B', text:'I have become more cynical about whether my work contributes anything.' },
    { id:'q10', section:'B', text:'I doubt the significance of my work.' },
    { id:'q11', section:'C', text:'I can effectively solve problems that arise in my work.', reverse:true },
    { id:'q12', section:'C', text:'I feel I am making a positive contribution.', reverse:true },
    { id:'q13', section:'C', text:'I feel energetic and engaged at work.', reverse:true },
    { id:'q14', section:'C', text:'I have accomplished many worthwhile things in this job.', reverse:true },
    { id:'q15', section:'C', text:'In my work, I deal with emotional problems very calmly.', reverse:true }
  ];
  const scaleLabels = ['Never','Rarely','Sometimes','Often','Every day'];
  let answers = {}, currentQ = 0;

  function renderQuestion(i) {
    if (i >= questions.length) { showResults(); return; }
    const q = questions[i];
    container.innerHTML = `
      <div class="progress-bar" style="margin-bottom:24px"><div class="progress-fill" style="width:${(i/questions.length)*100}%"></div></div>
      <p style="font-size:var(--fs-sm);color:var(--ink-muted);margin-bottom:20px">Question ${i+1} of ${questions.length} · Section ${q.section}</p>
      <h3 style="font-family:var(--font-serif);font-weight:var(--fw-normal);font-size:var(--fs-lg);color:var(--ink);margin-bottom:24px;line-height:var(--lh-relaxed)">${q.text}</h3>
      <div class="scale-options">
        ${scaleLabels.map((label,idx) => `
          <button class="scale-btn${answers[q.id]===idx+1?' selected':''}" data-value="${idx+1}">${label}</button>
        `).join('')}
      </div>
      <div style="margin-top:24px;display:flex;justify-content:space-between">
        <button class="btn btn-ghost btn-sm" ${i===0?'disabled':''} id="prev-btn">← Previous</button>
        <button class="btn btn-primary btn-sm" id="next-btn" ${!answers[q.id]?'disabled':''}>${i===questions.length-1?'See Results':'Next →'}</button>
      </div>`;
    document.querySelectorAll('.scale-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[q.id] = parseInt(btn.dataset.value);
        document.querySelectorAll('.scale-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('next-btn').disabled = false;
      });
    });
    document.getElementById('prev-btn').addEventListener('click', () => { currentQ--; renderQuestion(currentQ); });
    document.getElementById('next-btn').addEventListener('click', () => { currentQ++; renderQuestion(currentQ); });
  }

  function showResults() {
    // Calc scores
    let secA = questions.filter(q=>q.section==='A').reduce((s,q)=>s+(answers[q.id]||0),0);
    let secB = questions.filter(q=>q.section==='B').reduce((s,q)=>s+(answers[q.id]||0),0);
    let secC = questions.filter(q=>q.section==='C').reduce((s,q)=>s+(q.reverse?(6-(answers[q.id]||0)):(answers[q.id]||0)),0);

    let aPct = (secA/25)*100, bPct = (secB/25)*100, cPct = (secC/25)*100;
    let levelA = aPct > 60 ? 'High' : aPct > 35 ? 'Moderate' : 'Low';
    let levelB = bPct > 60 ? 'High' : bPct > 35 ? 'Moderate' : 'Low';
    let levelC = cPct < 40 ? 'Low' : cPct < 65 ? 'Moderate' : 'High';

    container.innerHTML = `
      <h2 style="font-family:var(--font-serif);font-weight:var(--fw-normal);font-size:var(--fs-2xl);margin-bottom:24px">Your Burnout Profile</h2>
      <div class="score-row">
        <div class="score-label"><span>Emotional Exhaustion</span><span>${secA} / 25 — ${levelA}</span></div>
        <div class="score-bar"><div class="score-fill ${levelA.toLowerCase()}" style="width:${aPct}%"></div></div>
      </div>
      <div class="score-row">
        <div class="score-label"><span>Disconnection</span><span>${secB} / 25 — ${levelB}</span></div>
        <div class="score-bar"><div class="score-fill ${levelB.toLowerCase()}" style="width:${bPct}%"></div></div>
      </div>
      <div class="score-row">
        <div class="score-label"><span>Personal Accomplishment</span><span>${secC} / 25 — ${levelC}</span></div>
        <div class="score-bar"><div class="score-fill low" style="width:${cPct}%"></div></div>
      </div>
      <div style="margin-top:32px">
        <h3 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:12px">What this means</h3>
        <p style="color:var(--ink-light);line-height:var(--lh-relaxed);margin-bottom:16px">${getInterpretation(levelA,levelB)}</p>
        <h3 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:12px">Recommended next steps</h3>
        <ul style="color:var(--ink-light);margin-left:20px;line-height:var(--lh-relaxed);margin-bottom:16px">
          <li><strong>Start with breathing:</strong> Try the <a href="/breathe/" style="color:var(--matcha-dark)">4-7-8 technique</a> for immediate stress relief.</li>
          <li><strong>Set boundaries:</strong> Define a hard stop time for work each day.</li>
          <li><strong>Talk to someone:</strong> Consider speaking with a therapist. <a href="https://www.psychologytoday.com/us/therapists" target="_blank" style="color:var(--matcha-dark)">Find one near you →</a></li>
          <li><strong>Reset your habits:</strong> Create a <a href="/digital-detox/" style="color:var(--matcha-dark)">digital detox plan</a> to reduce after-hours screen time.</li>
        </ul>
      </div>
      <div class="disclaimer-box" style="margin-top:24px">
        <p>If these results resonate strongly, please reach out. Call or text <strong>988</strong> (US) — free, confidential, 24/7.</p>
      </div>
      <p style="font-size:var(--fs-sm);color:var(--ink-muted);margin-top:16px"><em>This is not a clinical diagnosis. Results are based on a simplified self-report tool.</em></p>
      <button class="btn btn-outline btn-sm" style="margin-top:16px" onclick="location.reload()">Retake Assessment</button>
      <p style="margin-top:24px">Want immediate relief? <a href="/breathe/" style="color:var(--matcha-dark)">Try our guided breathing exercises →</a></p>`;
  }

  function getInterpretation(a,b) {
    if (a==='High' && b==='High') return 'Your scores suggest significant emotional exhaustion and disconnection. This pattern is common among people who care deeply about their work but have been under sustained pressure without adequate recovery.';
    if (a==='High') return 'Your primary challenge is emotional exhaustion — feeling drained day after day. This is often the first stage of burnout and responds well to recovery-focused changes.';
    if (b==='High') return 'Your scores suggest growing disconnection from work. This can happen when job demands shift or growth stalls. Reconnecting with what matters to you may help.';
    return 'Your scores suggest you are managing reasonably well. Continue to monitor your stress levels and maintain healthy boundaries. Prevention is easier than recovery.';
  }

  // Start
  document.getElementById('start-assessment').addEventListener('click', () => {
    document.getElementById('assessment-intro').style.display = 'none';
    container.style.display = 'block';
    renderQuestion(0);
  });
})();

// === Digital Detox Planner ===
(function() {
  const form = document.getElementById('detox-form');
  if (!form) return;
  let step = 1, data = { screenTime:'', problemTime:[], detoxStyle:'', activities:[] };

  function renderStep() {
    if (step === 1) {
      form.innerHTML = `
        <h2 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:16px">Step 1: Your current screen time</h2>
        <p style="color:var(--ink-light);margin-bottom:20px">How many hours per day do you spend on your phone outside of work?</p>
        <select class="form-input" id="screen-time">
          <option value="">Select...</option>
          <option ${data.screenTime==='lt2'?'selected':''} value="lt2">Less than 2 hours</option>
          <option ${data.screenTime==='2-4'?'selected':''} value="2-4">2–4 hours</option>
          <option ${data.screenTime==='4-6'?'selected':''} value="4-6">4–6 hours</option>
          <option ${data.screenTime==='6-8'?'selected':''} value="6-8">6–8 hours</option>
          <option ${data.screenTime==='8+'?'selected':''} value="8+">8+ hours</option>
        </select>
        <div style="margin-top:24px;display:flex;justify-content:flex-end">
          <button class="btn btn-primary btn-sm" id="step-next">Next →</button>
        </div>`;
    } else if (step === 2) {
      const times = ['Morning','Work hours','Evening','Before bed','Weekends'];
      form.innerHTML = `
        <h2 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:16px">Step 2: When screens hit hardest</h2>
        <p style="color:var(--ink-light);margin-bottom:20px">Which time of day do you most want to reduce screen use?</p>
        <div class="pattern-grid" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr))">
          ${times.map(t => `<button class="pattern-btn${data.problemTime.includes(t)?' active':''}" data-time="${t}"><strong>${t}</strong></button>`).join('')}
        </div>
        <div style="margin-top:24px;display:flex;justify-content:space-between">
          <button class="btn btn-ghost btn-sm" id="step-prev">← Back</button>
          <button class="btn btn-primary btn-sm" id="step-next">Next →</button>
        </div>`;
      document.querySelectorAll('[data-time]').forEach(b => {
        b.addEventListener('click', () => {
          b.classList.toggle('active');
          const t = b.dataset.time;
          if (data.problemTime.includes(t)) data.problemTime = data.problemTime.filter(x=>x!==t);
          else data.problemTime.push(t);
        });
      });
    } else if (step === 3) {
      const styles = [
        { key:'weekend', name:'Weekend Reset', desc:'48-hour light detox. No social media before noon.' },
        { key:'evening', name:'Evening Wind-Down', desc:'Screen-free 90 minutes before bed. Read, journal, or music instead.' },
        { key:'morning', name:'Morning First Hour', desc:'No phone for the first hour after waking. Start your day on your terms.' },
        { key:'custom', name:'Custom Plan', desc:'Pick your own screen-free windows and replacement activities.' }
      ];
      form.innerHTML = `
        <h2 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:16px">Step 3: Choose your detox style</h2>
        <div class="pattern-grid">
          ${styles.map(s => `<button class="pattern-btn${data.detoxStyle===s.key?' active':''}" data-style="${s.key}"><strong>${s.name}</strong><span>${s.desc}</span></button>`).join('')}
        </div>
        <div style="margin-top:24px;display:flex;justify-content:space-between">
          <button class="btn btn-ghost btn-sm" id="step-prev">← Back</button>
          <button class="btn btn-primary btn-sm" id="step-next" ${!data.detoxStyle?'disabled':''}>Next →</button>
        </div>`;
      document.querySelectorAll('[data-style]').forEach(b => {
        b.addEventListener('click', () => {
          document.querySelectorAll('[data-style]').forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          data.detoxStyle = b.dataset.style;
          document.getElementById('step-next').disabled = false;
        });
      });
    } else if (step === 4) {
      const activities = ['Read a book','Go for a walk','Journal or write','Cook a meal','Call a friend','Meditate or stretch','Listen to music','Tidy something'];
      form.innerHTML = `
        <h2 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:16px">Step 4: Pick replacement activities</h2>
        <p style="color:var(--ink-light);margin-bottom:20px">What would you do instead of scrolling?</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
          ${activities.map(a => `<label style="display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--border);border-radius:var(--radius-md);cursor:pointer;background:${data.activities.includes(a)?'var(--matcha-bg)':'var(--paper)'}">
            <input type="checkbox" ${data.activities.includes(a)?'checked':''} data-activity="${a}" style="accent-color:var(--matcha)">
            <span style="font-size:var(--fs-sm)">${a}</span>
          </label>`).join('')}
        </div>
        <div style="margin-top:24px;display:flex;justify-content:space-between">
          <button class="btn btn-ghost btn-sm" id="step-prev">← Back</button>
          <button class="btn btn-primary btn-sm" id="step-next">Generate My Plan</button>
        </div>`;
      document.querySelectorAll('[data-activity]').forEach(cb => {
        cb.addEventListener('change', () => {
          if (cb.checked) data.activities.push(cb.dataset.activity);
          else data.activities = data.activities.filter(x=>x!==cb.dataset.activity);
          cb.parentElement.style.background = cb.checked ? 'var(--matcha-bg)' : 'var(--paper)';
        });
      });
    }

    if (step === 1) {
      document.getElementById('step-next').addEventListener('click', () => {
        data.screenTime = document.getElementById('screen-time').value;
        if (data.screenTime) { step++; renderStep(); }
      });
    } else {
      document.getElementById('step-prev')?.addEventListener('click', () => { step--; renderStep(); });
      document.getElementById('step-next')?.addEventListener('click', () => {
        if (step < 4) { step++; renderStep(); }
        else showPlan();
      });
    }
  }

  function showPlan() {
    const styleNames = { weekend:'Weekend Reset', evening:'Evening Wind-Down', morning:'Morning First Hour', custom:'Custom Plan' };
    form.innerHTML = `
      <div class="plan-card">
        <h2 style="font-family:var(--font-serif);font-weight:var(--fw-normal);font-size:var(--fs-2xl);margin-bottom:16px">Your Digital Detox Plan</h2>
        <p style="color:var(--ink-light);margin-bottom:8px"><strong>Style:</strong> ${styleNames[data.detoxStyle]||'Custom'}</p>
        <p style="color:var(--ink-light);margin-bottom:20px"><strong>Key times to reduce:</strong> ${data.problemTime.join(', ')||'General'}</p>
        <h4 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:12px">Your replacement activities:</h4>
        <ul style="color:var(--ink-light);margin-left:20px;line-height:var(--lh-relaxed);margin-bottom:20px">${data.activities.map(a=>`<li>${a}</li>`).join('')}</ul>
        <div style="background:var(--matcha-bg);border-radius:var(--radius-md);padding:16px;margin-bottom:20px">
          <h4 style="font-family:var(--font-serif);font-weight:var(--fw-normal);margin-bottom:8px">Tips for sticking with it:</h4>
          <ul style="color:var(--ink-light);margin-left:20px;line-height:var(--lh-relaxed);font-size:var(--fs-sm)">
            <li>Charge your phone outside the bedroom</li>
            <li>Use a physical alarm clock instead of your phone</li>
            <li>Tell a friend about your plan — accountability helps</li>
            <li>If you slip up, just start again tomorrow</li>
          </ul>
        </div>
        <button class="btn btn-primary" onclick="window.print()">📸 Save or screenshot this plan</button>
        <button class="btn btn-soft btn-sm" style="margin-left:12px" onclick="location.reload()">🔄 Start over</button>
      </div>`;
  }

  renderStep();
})();
