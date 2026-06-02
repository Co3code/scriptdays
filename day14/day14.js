// Day 14: Forms & Validation
// Guard for Node usage.
if (typeof document !== "undefined") {
  const form = document.getElementById("signupForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageEl = document.getElementById("formMessage");

  const passwordInput = document.getElementById("password");
  const pwMessageEl = document.getElementById("pwMessage");

  function setMessage(el, text, kind) {
    if (!el) return;
    el.classList.remove("error", "success");
    el.textContent = text;
    if (kind) el.classList.add(kind);
  }

  // TODO 1: Validate name + email before submit
  // Rules:
  // - name must be at least 2 characters (after trim)
  // - email must include "@" and "." (simple check)
  if (form) {
    form.addEventListener("submit", (event) => {
      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";

      if (name.length < 2) {
        event.preventDefault();
        setMessage(messageEl, "Error: Name must be at least 2 characters.", "error");
        nameInput && nameInput.focus();
        return;
      }

      const emailOk = email.includes("@") && email.includes(".");
      if (!emailOk) {
        event.preventDefault();
        setMessage(messageEl, "Error: Please enter a valid email.", "error");
        emailInput && emailInput.focus();
        return;
      }

      setMessage(messageEl, "✓ Success: Form submitted (demo validation passed).", "success");
      // In a real app we would submit; for this learning page we just show message.
      event.preventDefault();
    });
  }

  // TODO 2: Password strength message
  // Rules (simple):
  // - length < 6 => Weak
  // - length >= 6 and < 10 => Medium
  // - length >= 10 => Strong
  function updatePasswordStrength() {
    if (!passwordInput || !pwMessageEl) return;
    const pw = passwordInput.value;
    if (pw.length === 0) {
      setMessage(pwMessageEl, "", null);
      return;
    }

    if (pw.length < 6) {
      setMessage(pwMessageEl, "Weak password (min 6 characters).", "error");
    } else if (pw.length < 10) {
      setMessage(pwMessageEl, "Medium password.", "success");
    } else {
      setMessage(pwMessageEl, "Strong password!", "success");
    }
  }

  if (passwordInput) {
    passwordInput.addEventListener("input", updatePasswordStrength);
  }
}
