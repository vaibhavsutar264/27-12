import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fff !important',
  text: '#121212 !important',
  textForLogin: '#11153b !important',
  primary: 'lightGreen !important',
  background: 'white !important',
  font: 'sans-serif !important',
  border: '#e8ebf3',
  label: '#abaec5',
  successBorder: '#75818a',
  opacity: '1',
  sidebarBg: '#fff',
  sidebarTopBg: '#fff',
  sidebarLeftBg: '#fff',
  inputBg: '#F7F8FA',
  inputHeaderBorder: '1px solid #efefef',
  dashboardContentBg: '#F7F8FA',
  tableHeaderBg: '#F7F8FA',
  dashboardTitle: '#344857',
  inputHeaderPlaceholderColor: '#344857',
}

export const darkTheme = {
  body: '#121212 !important',
  text: '#fff !important',
  textForLogin: 'white !important',
  primary:
    'linear-gradient(297deg, #F57C52 0%, #D63548 100%) 0% 0% no-repeat padding-box !important',
  background: '#092133 !important',
  font: '"Ubuntu", sans-serif !important',
  border: '#04131E',
  label: '#ffffff',
  successBorder: '#195583',
  opacity: '0.5',
  sidebarBg: '#1E2023',
  sidebarTopBg: '#1E2023',
  sidebarLeftBg: '#1E2023',
  inputBg: '#25292E',
  inputHeaderBorder: 'none',
  dashboardContentBg: '#111315',
  tableHeaderBg: '#111315',
  dashboardTitle: '#fff',
  inputHeaderPlaceholderColor: '#787785',
}

export const GlobalStyles = createGlobalStyle<{ theme: string }>`
  body {
    background: ${({ theme }) => theme.body};
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.textForLogin};
  }

  p {
    line-height: 1.4rem;
  }

  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
  }
  .h1-padding{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }
  .account__screen .account__form .form__inner .MuiInputBase-root::before {
    border: 1px solid ${({ theme }) => theme.border} !important;
  }
  .account__screen .account__form .form__inner .account__form__body .input-wrapper .MuiFormControl-root label {
    color: ${({ theme }) => theme.label};
    opacity: ${({ theme }) => theme.opacity};
  }
  .account__screen .account__form .form__inner .account__form__body .input-wrapper.success .MuiInputBase-root::before {
    border-color: ${({ theme }) => theme.successBorder} !important;
  }
  .password-toggle svg {
    color: ${({ theme }) => theme.text};
  }
  .title {
    color: ${({ theme }) => theme.text};
  }
  #login-form{
    background: ${({ theme }) => theme.background};
  }
  .homescreen-text{
    color: ${({ theme }) => theme.text};
  }
  .login-area .form-title p.sub-title {
    color: ${({ theme }) => theme.textForLogin};
  }
  #username{
    color: ${({ theme }) => theme.textForLogin};
  }
  #password{
    color: ${({ theme }) => theme.textForLogin};
  }
  #confirmPassword{
    color: ${({ theme }) => theme.textForLogin};
  }
  #mail-icon{
    color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
  #unlock-icon{
    color: ${({ theme }) => theme.textForLogin};
    opacity: ${({ theme }) => theme.opacity};
  }
  #forgot-password{
    color: ${({ theme }) => theme.textForLogin};
  }
  #sidebar-top{
    background-color: ${({ theme }) => theme.sidebarTopBg};
  }
  #sidebar-left{
    background-color: ${({ theme }) => theme.sidebarLeftBg};
  }
  #basic-button{
    background-color: ${({ theme }) => theme.sidebarBg};
  }
  .dashboard__navbar .dashboard__container .right__elements .search__group .search__form{
    background-color: ${({ theme }) => theme.inputBg};
  }
  .dashboard__navbar .dashboard__container .right__elements .search__group .search__form{
    background-color: ${({ theme }) => theme.inputBg};
  }
  #sidebar-top > div > div > div.right__elementsItem.search__group > form > div > input::placeholder{
    color: ${({ theme }) => theme.inputHeaderPlaceholderColor};
  }
  .dashboard__navbar .dashboard__container .right__elements .search__group .search__form{
    border: ${({ theme }) => theme.inputHeaderBorder};
  }
  .dashboard__wrapper .dashboard__content{
    background-color: ${({ theme }) => theme.dashboardContentBg};
  }
  .TableHead{
    background-color: ${({ theme }) => theme.tableHeaderBg};
  }
  div.dashboard__wrapper > div.dashboard__content > div.content__header > div.content__breadcrum > h3{
    color: ${({ theme }) => theme.dashboardTitle};
  }
`
