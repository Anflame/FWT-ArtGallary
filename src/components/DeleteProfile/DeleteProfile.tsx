import React, { FC, useEffect } from 'react';
import cn from 'classnames/bind';
import Button from '../Button';
import { Context } from '../../hooks/Context';
import { overflowHidden } from '../../hooks/OverFlowHidden';
import { PressEscape } from '../../hooks/PressEscape';
import type { SetIsShow } from '../../comon-types';
import { ReactComponent as CloseIcon } from '../../assets/images/closeIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/deleteIcon.svg';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type DeleteProfileProps = {
  isShowDeleteProfile: boolean;
  setIsShowDeleteProfile: SetIsShow;
};

export const DeleteProfile: FC<DeleteProfileProps> = ({
  isShowDeleteProfile,
  setIsShowDeleteProfile,
}) => {
  const { theme } = Context();
  const handlePressEscape = PressEscape(setIsShowDeleteProfile);

  const handleDeleteProfile = () => {};

  useEffect(() => {
    handlePressEscape();
    overflowHidden(isShowDeleteProfile);
    return document.removeEventListener('keydown', () =>
      setIsShowDeleteProfile(false),
    );
  }, [isShowDeleteProfile]);

  return (
    <>
      {isShowDeleteProfile && (
        <section
          className={cx('deleteProfile')}
          onClick={() => setIsShowDeleteProfile(false)}
        >
          <div
            className={cx('deleteProfileContent')}
            onClick={(e) => e.stopPropagation()}
          >
            <DeleteIcon
              className={cx('deleteProfileIcon')}
              fill={theme === 'dark' ? '#9C9C9C' : '#575757'}
              width="40px"
              height="40px"
            />
            <h3 className={cx('deleteProfileHeading')}>
              Do you want to delete this artist profile?
            </h3>
            <p className={cx('deleteProfileText')}>
              You will not be able to recover this profile afterwards.
            </p>
            <Button handleClick={handleDeleteProfile} className={'defaultBtn'}>
              delete
            </Button>
            <p
              className={cx('deleteProfileCancel')}
              onClick={() => setIsShowDeleteProfile(false)}
            >
              cancel
            </p>
            <CloseIcon
              onClick={() => setIsShowDeleteProfile(false)}
              fill={theme === 'dark' ? '#9C9C9C' : '#575757'}
              className={cx('closeIcon')}
            />
          </div>
        </section>
      )}
    </>
  );
};
