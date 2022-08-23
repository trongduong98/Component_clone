import getNextConfig from 'next/config';

const { publicRuntimeConfig } = getNextConfig();
const ENV = publicRuntimeConfig.ENV;

export interface AppEnvs {
  ENV: string;
  PUBLIC_URL: string;
}

export const DevelopmentEnvs: AppEnvs = {
  ENV: 'develop',
  PUBLIC_URL: 'http://localhost:3000',
}

export const StagingEnvs: AppEnvs = {
  ...DevelopmentEnvs,
  ENV: 'staging',
  PUBLIC_URL: 'http://localhost:3000',
}

export const ProductionEnvs: AppEnvs = {
  ENV: 'production',
  PUBLIC_URL: 'http://localhost:3000',
}

const envs = ENV === 'production' ? ProductionEnvs
  : ENV === 'staging' ? StagingEnvs
    : DevelopmentEnvs;

export const getEnv = (key: keyof typeof envs) => envs[key];
export const isDev = !['beta', 'production'].includes(ENV);