import React, { useState } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '/public/assets/lottie/YTwo.json';

const LottieAnimationTwo = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
}

export default LottieAnimationTwo;