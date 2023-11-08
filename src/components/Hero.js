import '../style/hero.css'
import Star from '../img/star.svg'
import Avatar from '../img/woman-avatar.svg'

function Hero() {
  return (
    <section className='hero__container'>
      <div className='hero__avatar-container'>
        <img className='hero__avatar' src={Avatar} alt="" />
      </div>
      <h2 className='hero__title'>Caroline Sada</h2>

      <div className='hero__divider'>
        <div className='hero__divider-line' />
        <img className='hero__divider-icon' src={Star} alt="Star" />
        <div className='hero__divider-line' />
      </div>

      <h3 className='hero__subtitle'>
        Digital Influencer -
        Public Figure -
        Business Management
      </h3>
    </section>
  );
}
export default Hero;