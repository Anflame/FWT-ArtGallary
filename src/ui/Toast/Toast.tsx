import { FC } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames/bind';
import { modalNode } from '../../constants';
import { useThemeContext } from '../../hooks/useThemeContext';
import type { SetIsShow } from '../../comon-types';
import { ReactComponent as CloseIcon } from '../../assets/images/closeIcon.svg';
import { ReactComponent as Error } from '../../assets/images/error.svg';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type ToastProps = {
  message: string;
  handleCloseToast: SetIsShow;
  isShowToast: boolean;
};

export const Toast: FC<ToastProps> = ({
  message,
  handleCloseToast,
  isShowToast,
}) => {
  const { theme } = useThemeContext();

  return createPortal(
    <div className={cx('toast', isShowToast && 'showToast')}>
      <h3 className={cx('toastHeading')}>
        {<Error className={cx('errorImg')} fill={'#AE2917'} />}
        Error!
      </h3>
      <p className={cx('toastText')}>
        {<Error className={cx('errorImg')} fill={'#AE2917'} />}
        {message}
      </p>
      <CloseIcon
        viewBox={'0 0 16 16'}
        className={cx('toastCloseIcon')}
        fill={theme === 'dark' ? '#9C9C9C' : '#575757'}
        onClick={() => handleCloseToast(false)}
      />
    </div>,
    modalNode,
  );
};
