import getNextConfig from 'next/config';

const { publicRuntimeConfig } = getNextConfig();
const ENV = publicRuntimeConfig.ENV;

export interface AppEnvs {
  ENV: string;
  PUBLIC_URL: string;
}

export const DevelopmentEnvs: AppEnvs = {
  ENV: 'develop',
  PUBLIC_URL: 'https://ssb-capital-phutl-staging-001.herokuapp.com',
}

export const StagingEnvs: AppEnvs = {
  ...DevelopmentEnvs,
  ENV: 'staging',
  PUBLIC_URL: 'https://ssb-capital-phutl-staging-001.herokuapp.com',
}

export const ProductionEnvs: AppEnvs = {
  ENV: 'production',
  PUBLIC_URL: 'http://localhost:3000',
}

const envs = ENV === 'production' ? ProductionEnvs
  : ENV === 'staging' ? StagingEnvs
    : DevelopmentEnvs;

export const getEnv = (key: keyof typeof envs) => envs[key];
export const isDev = !['production'].includes(ENV);