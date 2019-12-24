export const getRemainingTime = (timeString: string | null, nowDate: number): string => {
  if (timeString) {
    const timeSpan: number = Date.parse(timeString) - nowDate;
    if (timeSpan > 0) {
      const allMin: number = Math.ceil(timeSpan / (1000 * 60));
      const hour: number = Math.floor(allMin / 60);
      const min: number = allMin - hour * 60;
      return `残り ${('0' + hour).slice(-2)}:${('0' + min).slice(-2)}`;
    }
    return '完了';
  }
  return '残り --:--';
};
