'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import useAxios from 'axios-hooks';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { SubscribeSchema } from '@/zodSchema/SubscribeForm';

type FormValues = {
  email: string;
};

function SubscribeForm() {
  const t = useTranslations();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(SubscribeSchema),
  });

  const [, Subscribe] = useAxios(
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/email-subscriber`,
      method: 'POST',
    },
    {
      manual: true,
    },
  );
  const onSubmit = async (requestData: FormValues) => {
    try {
      await Subscribe({
        data: { ...requestData },
      });
      toast.success(t('success'), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (err) {
      toast.error(t('error'), {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } finally {
      reset();
    }
  };

  return (
    <>
      <div className="f-item newsletter">
        <h4 className="widget-title">{t('subscribes.title')}</h4>
        <p>{t('subscribes.content')}</p>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder={t('subscribes.placeholder')}
            className="form-control mb-0"
            name="email"
          />
          {errors?.email && (
            <p className="text-danger mb-0">{t(errors.email.message)}</p>
          )}
          <button type="submit">
            {t('subscribes.button')} <i className="fa fa-paper-plane" />
          </button>
        </form>
      </div>
    </>
  );
}

export default SubscribeForm;
