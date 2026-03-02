/* ===== KONAMI CODE — CLASSIFIED OPS TERMINAL ===== */
(function() {
  const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;

  // Terminal command responses
  const commands = {
    help: 'Available commands: whoami, playbook, metrics, projects, stack, coffee, principles, hire, clear, exit',
    whoami: 'Chinmay Kadli — Operations & Project Manager, Dublin.\nEmployee #3 at a legal-tech startup. Co-founded a D2C brand.\nModelled semiconductor disruptions for Analog Devices.\nI walk into "no playbook" situations and build one.',
    playbook: '1. Map the chaos — what\'s broken, what\'s missing, what\'s on fire\n2. Pick the constraint that unlocks everything else\n3. Build the process, not the workaround\n4. Measure what matters, ignore vanity metrics\n5. Hand it off so it runs without you',
    metrics: 'Revenue: $6K → $24K/month (4x in 4 months)\nScale: 1 court → 5 Indian states\nFunding: $2M seed round secured (3one4 Capital)\nThesis: A- grade, Analog Devices collaboration\nWTF: $340 invested → $27K revenue, 10+ brands',
    projects: '[NN] NyayaNidhi — Legal-tech ops, 1→5 states\n[WTF] What The Froot — D2C brand, zero→marketplace\n[ADI] Analog Devices Thesis — Supply chain simulation\n\nType: nn, wtf, or adi for details.',
    nn: 'NyayaNidhi (11 months)\nBuilt hub-and-spoke model for legal translation.\nRedesigned AI architecture. Won ₹24L govt tender.\nGrew team from 5→9. Revenue 4x in 4 months.\nThe messy part? First 3 months were pure chaos.',
    wtf: 'What The Froot (13 months)\nCo-founded during COVID with $340 and zeal.\nManaged supply chain, Shopify, vendor relationships.\nCut costs 20%. Pivoted to 10-brand marketplace.\nThe messy part? We almost ran out of cash. Twice.',
    adi: 'ADI Thesis (3 months)\nDual-model framework: Excel Solver + AnyLogic DES.\n9 fabs, 4 disruption scenarios simulated.\nGraded A- by UCD. Collaboration with Analog Devices.\nThe messy part? The first model was completely wrong.',
    stack: 'Tools: Notion, Jira, Power BI, Excel (advanced),\nShopify, AnyLogic, Python (basic), SQL (basic)\nFrameworks: Agile/Scrum, Lean, Six Sigma (Yellow Belt)\nSoft: Stakeholder management, cross-functional teams,\nprocess design, vendor management, P&L ownership',
    coffee: '☕ I take mine black. No sugar.\nMuch like my project status reports.',
    principles: '→ Build the system, not the hack\n→ If you can\'t measure it, you can\'t fix it\n→ Messy starts are fine. Messy middles are where the work is.\n→ Hand off everything you build. If it needs you, it\'s not done.\n→ Show the receipts, not the resume.',
    hire: '📧 chinmay.kadli@gmail.com\n🔗 linkedin.com/in/chinmay-kadli\n📍 Dublin, Ireland\n🛂 Stamp 1G — No sponsorship required\n\nI respond within 24 hours. Let\'s talk.',
    clear: '__CLEAR__',
    exit: '__EXIT__',
  };

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    .konami-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.95);
      z-index: 10000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      opacity: 0;
      transition: opacity 0.3s;
      overflow: hidden;
    }
    .konami-overlay.active { opacity: 1; }

    /* Flicker effect */
    .konami-flicker {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 9999;
      pointer-events: none;
      animation: konami-flash 0.6s steps(4) forwards;
    }
    @keyframes konami-flash {
      0%   { background: rgba(191,140,10,0.15); }
      25%  { background: rgba(0,0,0,0.8); }
      50%  { background: rgba(224,106,70,0.2); }
      75%  { background: rgba(0,0,0,0.6); }
      100% { background: rgba(0,0,0,0); }
    }

    /* Stamp */
    .konami-stamp {
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%) rotate(-12deg) scale(2);
      z-index: 10001;
      font-family: 'Space Mono', monospace;
      font-size: 48px;
      font-weight: 700;
      color: var(--accent, #BF8C0A);
      text-transform: uppercase;
      letter-spacing: 6px;
      border: 4px solid var(--accent, #BF8C0A);
      padding: 12px 32px;
      opacity: 0;
      pointer-events: none;
      animation: stamp-in 0.8s 0.3s forwards;
    }
    @keyframes stamp-in {
      0%   { opacity: 0; transform: translate(-50%, -50%) rotate(-12deg) scale(2); }
      40%  { opacity: 1; transform: translate(-50%, -50%) rotate(-12deg) scale(1); }
      60%  { opacity: 1; transform: translate(-50%, -50%) rotate(-12deg) scale(1.05); }
      80%  { opacity: 1; transform: translate(-50%, -50%) rotate(-12deg) scale(1); }
      100% { opacity: 0; transform: translate(-50%, -50%) rotate(-12deg) scale(1); }
    }

    /* Terminal */
    .konami-terminal {
      width: 90%;
      max-width: 680px;
      margin-top: 80px;
      padding: 32px;
      font-family: 'Space Mono', monospace;
      font-size: 13px;
      line-height: 1.7;
      color: var(--accent, #BF8C0A);
      opacity: 0;
      animation: terminal-in 0.4s 1.2s forwards;
    }
    @keyframes terminal-in {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .konami-terminal-header {
      color: rgba(255,255,255,0.3);
      font-size: 11px;
      margin-bottom: 16px;
      letter-spacing: 1px;
    }
    .konami-terminal-output {
      max-height: 60vh;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-word;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.15) transparent;
    }
    .konami-terminal-output .cmd-line {
      color: rgba(255,255,255,0.5);
    }
    .konami-terminal-output .cmd-response {
      color: var(--accent, #BF8C0A);
      margin-bottom: 16px;
      display: block;
    }
    .konami-input-line {
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
    .konami-prompt {
      color: rgba(255,255,255,0.5);
      margin-right: 8px;
      flex-shrink: 0;
    }
    .konami-input {
      background: none;
      border: none;
      outline: none;
      color: var(--accent, #BF8C0A);
      font-family: 'Space Mono', monospace;
      font-size: 13px;
      width: 100%;
      caret-color: var(--accent, #BF8C0A);
    }
    .konami-exit-hint {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: rgba(255,255,255,0.2);
      letter-spacing: 1px;
      text-transform: uppercase;
      z-index: 10002;
      opacity: 0;
      animation: terminal-in 0.4s 1.6s forwards;
    }
  `;
  document.head.appendChild(style);

  // Listen for Konami code
  document.addEventListener('keydown', function(e) {
    const expected = konamiSequence[konamiIndex];
    if (e.key === expected) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        activateKonami();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateKonami() {
    // Flicker
    const flicker = document.createElement('div');
    flicker.className = 'konami-flicker';
    document.body.appendChild(flicker);
    setTimeout(() => flicker.remove(), 800);

    // Stamp
    const stamp = document.createElement('div');
    stamp.className = 'konami-stamp';
    stamp.textContent = 'Clearance Granted';
    document.body.appendChild(stamp);
    setTimeout(() => stamp.remove(), 1500);

    // Overlay + Terminal
    setTimeout(() => {
      const overlay = document.createElement('div');
      overlay.className = 'konami-overlay';
      overlay.innerHTML = `
        <div class="konami-terminal">
          <div class="konami-terminal-header">OPERATOR'S FIELD MANUAL v1.0 — CLASSIFIED OPS TERMINAL</div>
          <div class="konami-terminal-output" id="konamiOutput"><span class="cmd-response">Clearance granted. Welcome to the back pages.\nType "help" for available commands.\n</span></div>
          <div class="konami-input-line">
            <span class="konami-prompt">OPS&gt;</span>
            <input class="konami-input" id="konamiInput" type="text" autocomplete="off" spellcheck="false" autofocus>
          </div>
        </div>
        <div class="konami-exit-hint">Press Escape to exit</div>
      `;
      document.body.appendChild(overlay);

      // Force reflow then show
      requestAnimationFrame(() => overlay.classList.add('active'));

      const input = document.getElementById('konamiInput');
      const output = document.getElementById('konamiOutput');

      // Focus input
      setTimeout(() => input.focus(), 1400);

      // Handle commands
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          const cmd = input.value.trim().toLowerCase();
          input.value = '';

          if (!cmd) return;

          // Echo command
          const cmdEl = document.createElement('span');
          cmdEl.className = 'cmd-line';
          cmdEl.textContent = 'OPS> ' + cmd + '\n';
          output.appendChild(cmdEl);

          if (cmd === 'exit') {
            closeTerminal(overlay);
            return;
          }

          if (cmd === 'clear') {
            output.innerHTML = '';
            return;
          }

          const response = commands[cmd] || 'Unknown command. Type "help" for available commands.';
          const respEl = document.createElement('span');
          respEl.className = 'cmd-response';
          respEl.textContent = response + '\n';
          output.appendChild(respEl);

          // Auto scroll
          output.scrollTop = output.scrollHeight;
        }
      });

      // Escape to close
      function escHandler(e) {
        if (e.key === 'Escape') {
          closeTerminal(overlay);
          document.removeEventListener('keydown', escHandler);
        }
      }
      document.addEventListener('keydown', escHandler);

      function closeTerminal(el) {
        el.classList.remove('active');
        setTimeout(() => el.remove(), 400);
      }
    }, 1000);
  }
})();
