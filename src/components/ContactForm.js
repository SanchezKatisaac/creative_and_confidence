import Star from '../img/star.svg'

function ContactForm() {
  return (
    <div>
      <h4>CONTACT ME</h4>

      <div className='contact-form__divider'>
        <div className='contact-form__divider-line' />
        <img className='contact-form__divider-icon' src={Star} alt="Star" />
        <div className='contact-form__divider-line' />
      </div>

      <ul className='header__links'>
        <li className='header__links-option'>Portfolio</li>
        <li className='header__links-option'>About</li>
        <li className='header__links-option'>Contact</li>
      </ul>
    </div>
  );
}

export default ContactForm;