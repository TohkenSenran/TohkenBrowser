import { gameRatio, headerMenuHeight, statusViewHeight, windowMode } from '../../constants';

export const windowTransform = (scale: number, mode: windowMode): void => {
  // ブラウザのアスペクト比(幅のみ取得可能)
  const gameFlame: HTMLElement | null = document.getElementById('game_frame');

  // console.log(`Transform info: ${scale} ${mode}`);

  document.body.style.overflow = 'hidden';
  if (gameFlame != null) {
    // サイズ変更
    gameFlame.style.transform = `scale(${scale})`;
    gameFlame.style.transformOrigin = 'top center';

    const posX: number = Math.ceil(gameFlame.getBoundingClientRect().left) + window.pageXOffset;
    const posY: number =
      Math.ceil(gameFlame.getBoundingClientRect().top) + window.pageYOffset - headerMenuHeight;
    window.scrollTo(0, posY);
    // setTimeoutを使わないと100%から別の倍率に行った際にposXの処理に失敗する
    setTimeout(() => {
      window.scrollBy(posX, 0);
    }, 100);

    const gameWidth: number = gameFlame.getBoundingClientRect().width;
    const gameHeight = gameRatio * gameWidth;
    const outElementWidth = window.outerWidth - window.innerWidth;
    const outElementHeight = window.outerHeight - window.innerHeight;

    switch (mode) {
      case windowMode.SEN:
        window.resizeTo(
          gameWidth + outElementWidth,
          gameHeight + outElementHeight + headerMenuHeight,
        );
        break;
      case windowMode.SHOU:
        window.resizeTo(
          gameWidth + outElementWidth,
          gameHeight + outElementHeight + headerMenuHeight + statusViewHeight,
        );
        break;
      case windowMode.HYOU:
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'visible';
        break;
      default:
        break;
    }
    // console.log('windowTransformed!');
  }
};
