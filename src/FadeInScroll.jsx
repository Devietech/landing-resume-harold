// FadeInScroll.jsx
import { useSpring, animated, config } from 'react-spring'




const FadeInScroll = ({ children }) => {
  const fade = useSpring({
    from: { 
      opacity: 0, 
      transform: 'translateY(50px)',
      scale: 0.95 // escala agregada
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
      scale: 1,
    },
    config: config.gentle // curva suave
  })

  return (
    <animated.div style={fade}>
      {children}
    </animated.div>
  )
}


export default FadeInScroll;