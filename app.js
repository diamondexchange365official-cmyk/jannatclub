const imageBase = '/images/';
const guides = [
  {
    id: 'registration', number: '01', label: 'YOUR FIRST STEP', title: 'Make yourself part of the club.',
    description: 'Start with the registration screen. Here is what each field is for.',
    steps: [['Choose your phone number', 'Use the country selector and enter the number you want to associate with your account.'], ['Create your password', 'Complete both password fields with the same password. Keep it unique to this account.'], ['Review the invite field', 'Check the invitation code if you are joining through an invite, then review the privacy agreement.'], ['Finish your registration', 'Use the Register button in the app after checking your details and the applicable terms.']],
    tip: 'Already registered? Use the Login link beneath the form instead.',
    images: [['jannat_club_step_01_registration.jpeg', 'The phone registration screen']], action: 'register', actionLabel: 'Register via Telegram'
  },
  {
    id: 'login', number: '02', label: 'PICK UP WHERE YOU LEFT OFF', title: 'Your account. One login away.',
    description: 'The login page offers phone-number and email tabs. Choose the method associated with your account.',
    steps: [['Choose how to sign in', 'Select Phone Number or Email at the top of the form.'], ['Enter your account details', 'Fill in your registered phone number or email and your password.'], ['Return to the lobby', 'Select Log in. If you cannot remember your password, use the recovery option shown on the screen.']],
    tip: 'Avoid remembering a password on a shared device, and never share your login details.',
    images: [['jannat_club_step_02_login.jpeg', 'Phone number and email login options']], action: 'login', actionLabel: 'Log in via Telegram'
  },
  {
    id: 'download', number: '03', label: 'TAKE THE CLUB WITH YOU', title: 'From your browser to your home screen.',
    description: 'The supplied app artwork breaks Android setup into three stages: download, install, and open.', layout: 'landscape',
    steps: [['Get the app file', 'Select Download app to save full.apk to your device.'], ['Review and install', 'Open the downloaded package, review the device prompt and requested permissions, then follow the installation flow.'], ['Open Jannat Club', 'Launch the app from your device and use the registration or login screen to continue.']],
    tip: 'Check the source and the permissions before installing an app on your device.',
    images: [['jannat_club_step_03_app_download_guide.jpeg', 'The three-part Android app setup guide']], download: true
  },
  {
    id: 'deposit', number: '04', label: 'UNDERSTAND YOUR WALLET', title: 'Get familiar with the deposit screen.',
    description: 'The wallet screen puts payment options and amount selection together. The next screen displays payment details.', layout: 'double',
    steps: [['Open the deposit area', 'Find Deposit from the account or wallet section to see the available methods.'], ['Review method and amount', 'Choose a supported method and an amount within your planned spending limit. Read the recharge instructions.'], ['Check the payment details', 'A QR-based flow may show a code, an amount, and a transaction reference field. Verify the destination before any real payment.'], ['Review your records', 'Use the deposit history in the app to check the status. This guide does not initiate a payment.']],
    tip: 'Amounts and QR codes in these screenshots are examples. Do not use a screenshot to make a payment.',
    images: [['jannat_club_step_04_01_deposit_amount.jpeg', '1. Method and amount selection'], ['jannat_club_step_04_02_deposit_payment_qr.jpeg', '2. Example payment screen']]
  },
  {
    id: 'bank-account', number: '05', label: 'YOUR ACCOUNT DETAILS', title: 'A closer look at bank account setup.',
    description: 'The bank-account form brings beneficiary information together in one place.',
    steps: [['Find the bank account option', 'Open the beneficiary or bank-account section from the withdrawal area.'], ['Check the required fields', 'The example asks for bank, recipient name, account number, phone number, email, and IFSC code.'], ['Review before saving', 'Make sure the account information belongs to the correct recipient before using Save in the real app.']],
    tip: 'This website does not collect or store banking details. The image is a walkthrough only.',
    images: [['jannat_club_step_05_add_bank_account.jpeg', 'The bank account details form']]
  },
  {
    id: 'wingo', number: '06', label: 'MEET THE GAME', title: 'Get to know the Wingo screen.',
    description: 'The illustrated guide and gameplay screen show round durations, colour choices, numbers, and history.',
    steps: [['Explore the round tabs', 'The screenshot includes 30-second, 1-minute, 3-minute, and 5-minute options. Each tab has its own timer.'], ['Understand the available choices', 'The controls show Green, Violet, Red, numbers 0–9, and Big or Small. Read the game rules before using them.'], ['Know where to find results', 'Game history, Chart, and Follow Strategy tabs sit below the selection area. Past results do not predict the next outcome.']],
    tip: 'Every round is uncertain. No colour, number, pattern, or strategy guarantees a win.',
    legend: true,
    images: [['jannat_club_step_06_01_wingo_guide.jpeg', 'An illustrated overview of Wingo'], ['jannat_club_step_06_02_wingo_gameplay.jpeg', 'Wingo controls and game history']]
  },
  {
    id: 'referral', number: '07', label: 'THE SOCIAL SIDE OF THE CLUB', title: 'Find your invitation tools.',
    description: 'Promotion and invitation screens show a referral dashboard, an invitation code, and sharing options.', layout: 'double',
    steps: [['Find the Promotion tab', 'The Agency screen brings direct and team figures together with invitation settings.'], ['Open the invitation page', 'Use Invitation Link to see the poster and the available sharing controls.'], ['Review the program details', 'Check invitation rules and commission details in the app before relying on any advertised rewards.']],
    tip: 'Referral terms and eligibility can change. The promotional figures in supplied artwork are not a promise of income.',
    images: [['jannat_club_step_07_01_referral_dashboard.jpeg', '1. Agency and promotion dashboard'], ['jannat_club_step_07_02_invite_friends.jpeg', '2. Invitation and sharing screen']]
  },
  {
    id: 'withdrawal', number: '08', label: 'FIND YOUR WAY AROUND WITHDRAWALS', title: 'Know the withdrawal essentials.',
    description: 'The withdrawal screen shows an available balance, beneficiary options, an amount field, and the platform’s conditions.',
    steps: [['Open Withdraw from your wallet', 'Review the displayed balance and the listed withdrawal methods.'], ['Review beneficiary information', 'The Bank Card option prompts you to add a bank account. Other options shown include UPI and USDT.'], ['Check limits and conditions', 'Read the current amount range, remaining requests, and other requirements in the app. Screenshot values may be outdated.'], ['Review the request status', 'Withdrawal history is available at the top of the screen. Processing is handled by the platform, not this guide.']],
    tip: 'Eligibility, limits, and processing times are platform-specific. Check the current terms before making a request.',
    images: [['jannat_club_step_08_withdrawal.jpeg', 'Balance, beneficiary, and withdrawal controls']]
  },
  {
    id: 'gift-code', number: '09', label: 'ONE MORE CLUB FEATURE', title: 'A small code. A separate place for it.',
    description: 'The Gift screen has a single code field and a history area, keeping redemption separate from other account actions.',
    steps: [['Find the Gift section', 'Open the gift-code area in the app to view the entry field.'], ['Check your code', 'Use a current code from a trusted source and review any associated offer conditions.'], ['Review the result', 'The Receive button submits the code in the app. Check the History area for the resulting record.']],
    tip: 'Codes may expire or have eligibility conditions. No active gift code is provided with this preview.',
    images: [['jannat_club_step_09_redeem_gift_code.jpeg', 'Gift-code entry and redemption history']]
  }
];

function escapeHtml(value) { return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character])); }
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
document.querySelector('#walkthroughs').innerHTML = guides.map(guide => `
  <section class="walkthrough observed-section" id="${guide.id}">
    <div class="walkthrough-header"><span class="step-number">${guide.number}</span><div><div class="step-label">${guide.label}</div><h2>${guide.title}</h2><p class="walkthrough-subtitle">${guide.description}</p></div></div>
    <div class="walkthrough-body ${guide.layout || ''}">
      <div class="walkthrough-copy"><h3>The walkthrough</h3><ol class="step-list">${guide.steps.map(([title, text]) => `<li><strong>${title}</strong>${text}</li>`).join('')}</ol><div class="guide-tip"><strong>A little heads-up.</strong> ${guide.tip}</div>${guide.legend ? '<div class="wingo-legend"><span class="green">Green</span><span class="violet">Violet</span><span class="red">Red</span><span>Numbers 0–9</span></div>' : ''}${guide.download ? `<a class="walkthrough-action" href="/full.apk" download="full.apk">Download app ${icon('arrow')}</a>` : ''}${guide.action ? `<a class="walkthrough-action" href="https://t.me/JannatClubOfficial" target="_blank" rel="noopener noreferrer">${guide.actionLabel}</a>` : ''}</div>
      <div class="screenshot-stack">${guide.images.map(([filename, caption]) => `<figure class="screenshot-figure"><button class="image-trigger" data-image="${filename}" data-caption="${escapeHtml(caption)}" aria-label="Enlarge ${escapeHtml(caption)}"><img src="${imageBase}${filename}" alt="${escapeHtml(caption)}" loading="lazy" decoding="async"><span class="image-expand">${icon('expand')}</span></button><figcaption>${caption}</figcaption></figure>`).join('')}</div>
    </div>
  </section>`).join('');

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.addEventListener('click', event => {
  if (event.target.closest('a,button')) {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.focus();
  }
});

const preview = document.querySelector('#preview-dialog');
const previewContent = {
  register: {title: 'Your club journey starts here.', description: 'This is a registration preview. Explore the account setup guide while the live sign-up link is being prepared.', href: '#registration', label: 'View registration guide'},
  login: {title: 'Welcome back to the club.', description: 'The login action is a demo for now. See the login walkthrough for a closer look at the account screen.', href: '#login', label: 'View login guide'},
  contact: {title: 'Let’s point you in the right direction.', description: 'Contact details will be added here. In the meantime, the frequently asked questions cover the basics of this website.', href: '#faq', label: 'Explore the FAQs'}
};
document.addEventListener('click', event => {
  const action = event.target.closest('[data-action]');
  if (!action) return;
  const content = previewContent[action.dataset.action];
  document.querySelector('#preview-title').textContent = content.title;
  document.querySelector('#preview-description').textContent = content.description;
  const guideLink = document.querySelector('#preview-guide-link');
  guideLink.href = content.href;
  guideLink.innerHTML = `${content.label} ${icon('arrow')}`;
  preview.showModal();
});
document.querySelector('#preview-guide-link').addEventListener('click', () => preview.close());

const imageDialog = document.querySelector('#image-dialog');
const imageButtons = [...document.querySelectorAll('[data-image]')];
let selectedImage = 0;
function updateImage(index) {
  selectedImage = index;
  const source = imageButtons[index];
  document.querySelector('#expanded-image').src = imageBase + source.dataset.image;
  document.querySelector('#expanded-image').alt = source.dataset.caption;
  document.querySelector('#image-caption').textContent = source.dataset.caption;
  document.querySelector('#image-count').textContent = `${index + 1} / ${imageButtons.length}`;
  document.querySelector('.lightbox-prev').disabled = index === 0;
  document.querySelector('.lightbox-next').disabled = index === imageButtons.length - 1;
}
imageButtons.forEach((button, index) => button.addEventListener('click', () => { updateImage(index); imageDialog.showModal(); }));
document.querySelector('.lightbox-prev').addEventListener('click', () => updateImage(Math.max(0, selectedImage - 1)));
document.querySelector('.lightbox-next').addEventListener('click', () => updateImage(Math.min(imageButtons.length - 1, selectedImage + 1)));
imageDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' && selectedImage > 0) updateImage(selectedImage - 1);
  if (event.key === 'ArrowRight' && selectedImage < imageButtons.length - 1) updateImage(selectedImage + 1);
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
});
const dialogObserver = new MutationObserver(() => document.body.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]'))));
document.querySelectorAll('dialog').forEach(dialog => dialogObserver.observe(dialog, {attributes: true, attributeFilter: ['open']}));

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(other => { other.classList.toggle('selected', other === button); other.setAttribute('aria-pressed', String(other === button)); });
  let visible = 0;
  document.querySelectorAll('.game-card').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; if (!card.hidden) visible++; });
  document.querySelector('.game-result').textContent = filter === 'all' ? `Showing all ${visible} game categories.` : `Showing ${button.textContent} games.`;
}));
const categoryDetails = document.querySelector('#game-categories');
document.querySelectorAll('a[href="#game-categories"]').forEach(link => link.addEventListener('click', () => { categoryDetails.open = true; }));

const search = document.querySelector('#guide-search');
const tocLinks = [...document.querySelectorAll('.toc a')];
function filterGuides() {
  const query = search.value.trim().toLowerCase();
  let matches = 0;
  tocLinks.forEach(link => { link.hidden = Boolean(query) && !`${link.textContent} ${link.dataset.search}`.toLowerCase().includes(query); if (!link.hidden) matches++; });
  document.querySelector('.search-feedback').textContent = !query ? '' : matches ? `${matches} ${matches === 1 ? 'guide' : 'guides'} found. Select one below.` : 'No matching guide. Try “wallet”, “app”, or “login”.';
}
search.addEventListener('input', filterGuides);
document.querySelector('.guide-search').addEventListener('submit', event => {
  event.preventDefault();
  const match = tocLinks.find(link => !link.hidden);
  if (match) match.click();
});
tocLinks.forEach(link => link.addEventListener('click', () => { if (search.value) { search.value = ''; filterGuides(); } }));
document.addEventListener('keydown', event => {
  const editing = ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName) || document.activeElement.isContentEditable;
  if (event.key === '/' && !editing && !document.querySelector('dialog[open]')) { event.preventDefault(); search.focus(); }
});
let toastTimer;
function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}
document.querySelector('#copy-guide').addEventListener('click', async () => {
  try {
    const url = new URL(location.href); url.hash = 'guides';
    await navigator.clipboard.writeText(url.href);
    showToast('Guide link copied. Ready to share.');
  } catch { showToast('You can share this guide by copying the address from your browser.'); }
});

const sectionLinks = [...document.querySelectorAll('.desktop-nav a')];
const observed = [...document.querySelectorAll('.observed-section')];
let scrollQueued = false;
function updateScroll() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('#reading-progress').style.width = `${scrollable > 0 ? Math.min(100, scrollY / scrollable * 100) : 0}%`;
  document.querySelector('.back-to-top').classList.toggle('visible', scrollY > 600);
  let current = observed[0];
  for (const section of observed) { if (section.getBoundingClientRect().top <= 180) current = section; }
  tocLinks.forEach(link => {
    const active = link.hash === `#${current.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
  let activeNav = scrollY < 500 ? '#home' : '#guides';
  if (current.id === 'games') activeNav = '#games';
  if (['faq','responsible-gaming'].includes(current.id)) activeNav = '#faq';
  if (current.id === 'about') activeNav = '#about';
  sectionLinks.forEach(link => link.classList.toggle('current', link.hash === activeNav));
  scrollQueued = false;
}
window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScroll); } }, {passive: true});
window.addEventListener('resize', updateScroll);
updateScroll();
