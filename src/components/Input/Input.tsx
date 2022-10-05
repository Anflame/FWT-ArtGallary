import { FC } from 'react';
import cn from 'classnames/bind';
import type { InputsProps } from '../../comon-types';
import { ReactComponent as Error } from '../../assets/images/error.svg';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

export const Input: FC<InputsProps> = ({
  id,
  type,
  className,
  placeholder,
  onChange,
  value,
  label,
  isError,
  errorMessage,
  ...args
}) => (
  <div>
    <label htmlFor={id} className={cx('inputLabel')}>
      {label}
    </label>
    <input
      className={cx('input', isError && 'inputError', className)}
      id={id}
      type={type || 'text'}
      {...args}
      placeholder={isError ? 'Wrong Text' : placeholder || ''}
      value={value}
      onChange={onChange}
    />
    {isError && (
      <p className={cx('errorText')}>
        {<Error className={cx('errorImg')} fill={'#AE2917'} />} {errorMessage}
      </p>
    )}
  </div>
);
