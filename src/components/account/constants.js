import reduxService from 'services/redux'

const constants = reduxService.prepareConstants(
  'components/account',
  [
    'SET_HAS_ACCOUNT',
    'SET_ACCOUNT_SIGNATURE',

    'SET_LOGIN_ERROR',
    'SET_IS_LOGGING_IN',

    'SET_RESET_PASSWORD_RESULT',
    'SET_RESET_PASSWORD_LOADING',

    'SET_SET_PASSWORD_RESULT',
    'SET_SET_PASSWORD_ERROR',
    'SET_SET_PASSWORD_LOADING',

    'SET_CREATE_ACCOUNT_LOADING',
    'SET_CREATE_ACCOUNT_ERROR',
    'SET_CREATE_ACCOUNT_COMPLETE',

    'SET_SIGN_CHALLENGE_LOADING',
    'SET_SIGN_CHALLENGE_COMPLETE',
    'SET_VERIFY_WALLET_ERROR',
    'SET_SUBMIT_WALLET_VERIFICATION_LOADING',
    'SET_SUBMIT_WALLET_VERIFICATION_COMPLETE',
  ]
)

export default constants