import { FormEvent, useState } from 'react';
import { Modal } from '../common/Modal';

export type AuthMode = 'login' | 'signup' | null;

export interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  onSwitchMode: (mode: AuthMode) => void;
}

export function AuthModal({ mode, onClose, onSwitchMode }: AuthModalProps) {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal
      isOpen={mode !== null}
      onClose={onClose}
      title={mode === 'login' ? 'Welcome back' : 'Create your account'}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <div className="auth-field">
            <label htmlFor="auth-name">Full name</label>
            <input id="auth-name" name="name" type="text" placeholder="Jane Cooper" autoComplete="name" required />
          </div>
        )}

        <div className="auth-field">
          <label htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </div>

        {mode === 'signup' && (
          <div className="auth-field">
            <label htmlFor="auth-mobile">Mobile number</label>
            <input
              id="auth-mobile"
              name="mobile"
              type="tel"
              placeholder="+1 (555) 000-0000"
              autoComplete="tel"
              required
            />
          </div>
        )}

        <div className="auth-field">
          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            name="password"
            type="password"
            placeholder="••••••••"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            minLength={8}
            required
          />
        </div>

        {mode === 'signup' && (
          <div className="auth-field">
            <label htmlFor="auth-confirm-password">Confirm password</label>
            <input
              id="auth-confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>
        )}

        {mode === 'login' && (
          <button type="button" className="auth-forgot">
            Forgot password?
          </button>
        )}

        {mode === 'signup' && (
          <label className="auth-checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => setAgreed(event.target.checked)}
              required
            />
            <span className="auth-checkbox-box" aria-hidden="true" />
            <span>
              I agree to the <a href="#terms">Terms of Service</a> and{' '}
              <a href="#privacy">Privacy Policy</a>
            </span>
          </label>
        )}

        <button type="submit" className="auth-submit">
          {mode === 'login' ? 'Log in' : 'Create account'}
        </button>

        <p className="auth-switch">
          {mode === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <button type="button" onClick={() => onSwitchMode('signup')}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" onClick={() => onSwitchMode('login')}>
                Log in
              </button>
            </>
          )}
        </p>
      </form>
    </Modal>
  );
}
