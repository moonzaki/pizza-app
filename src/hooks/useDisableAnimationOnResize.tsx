import { useRef, useEffect } from 'react';
/**
 * ### useDisableAnimationOnResize
 *
 * React-хук для временного отключения CSS-анимации (`transition`) на DOM-элементах во время изменения размера окна.
 * Это полезно для предотвращения визуальных глитчей при изменении размеров экрана.
 *
 * ---
 *
 * #### Параметры:
 * @param {string} className - CSS-селектор для DOM-элементов.
 *
 * (`type: string`)
 * @param {number} [timeout=300] - Тайм-аут восстановления transition.
 *   Время в миллисекундах до восстановления анимации после завершения изменения размеров.
 *
 * (`type: number`, по умолчанию `300`)
 *
 * ---
 *
 * #### Пример использования:
 * Отключаем анимации на элементе с классом 'menu' при изменении размера окна
 * ```javascript
 * useDisableAnimationOnResize('.menu', 300);
 * ```
 *
 * #### CSS Требования:
 * ```css
 * .no-transition {
 *     transition: none !important;
 * }
 * ```
 */

function useDisableAnimationOnResize(className: string, timeout: number = 300) {
  const disableTransitionRef = useRef(false);
  const resizeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      disableTransitionRef.current = true;
      const menuElement = document.querySelector(`.${className}`);
      if (menuElement) {
        menuElement.classList.add('no-transition');
      }

      if (resizeTimeoutRef.current !== null) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        disableTransitionRef.current = false;
        if (menuElement) {
          menuElement.classList.remove('no-transition');
        }
      }, timeout);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current !== null) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [className, timeout]);

  return disableTransitionRef;
}

export {useDisableAnimationOnResize};
