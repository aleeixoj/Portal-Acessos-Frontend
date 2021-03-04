import styled from 'styled-components'
import CustomButton from '../../components/CustomButton'
import Modal from '../../components/RelatorioModal'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'TA TA TA'
    'b b b';
  position: relative;
  .InovuaReactDataGrid {
    grid-area: TA;
    height: 100%;
    width: 100%;
    max-width: 100vw;
  }
  .InovuaReactDataGrid,
  .InovuaReactDataGrid__header,
  .InovuaReactDataGrid__row,
  .inovua-react-pagination-toolbar,
  .inovua-react-toolkit-numeric-input,
  .inovua-react-toolkit-numeric-input--theme-default-light,
  .inovua-react-toolkit-numeric-input--ltr,
  .inovua-react-toolkit-numeric-input--enable-spinner-tools,
  .inovua-react-pagination-toolbar__current-page,
  .inovua-react-toolkit-numeric-input__input,
  .inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light,
  .inovua-react-toolkit-combo-box__tools,
  .inovua-react-toolkit-combo-box.inovua-react-toolkit-combo-box--theme-default-light,
  .inovua-react-toolkit-combo-box__value,
  .inovua-react-toolkit-combo-box__list--theme-default-light,
  .inovua-react-toolkit-combo-box__list__item,
  .InovuaReactDataGrid__column-header__filter-wrapper,
  .InovuaReactDataGrid__column-header__filter-wrapper--empty,
  .InovuaReactDataGrid__header-wrapper__fill__filters,
  .inovua-react-toolkit-text-input__input,
  .inovua-react-toolkit-text-input,
  .InovuaReactDataGrid__column-header__filter,
  .InovuaReactDataGrid__column-header__filter--string,
  .inovua-react-toolkit-text-input--ltr,
  .inovua-react-toolkit-text-input--theme-default-light,
  .inovua-react-toolkit-text-input--enable-clear-button,
  .InovuaReactDataGrid__column-header__content,
  .InovuaReactDataGrid__box--ellipsis,
  .inovua-react-toolkit-date-input--theme-default-light,
  .inovua-react-toolkit-date-input__input:not(.inovua-react-toolkit-date-input__input--disabled) {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.menuTxt};
    background-color: ${props => props.theme.colors.background};
    text-align: center;
  }
  .button {
    justify-content: flex-start;
    align-items: center;
    grid-area: b;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
  }
`

export const Button = styled(CustomButton)`
  width: 250px;
  background-color: #eb3c7d;
  font-size: 16px;
  color: #fff;
  transition: 0.2s;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.menuHover};
    font-weight: 700;
  }
`
type PropTypeBg = {
  show: boolean
}

export const NewIncidentBox = styled.div.attrs((props: PropTypeBg) => ({
  display: props.show
}))<PropTypeBg>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > .background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.75);
    z-index: -1;
  }

  > button {
    position: absolute;
    top: 28rem;
    left: 102rem;
    background: #eb3c7d;
    border: 1px solid #eb3c7d;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 2.6rem;
    color: #fff;
    transition: color 0.2s;

    &:hover {
      background-color: ${props => props.theme.colors.menuHover};
      border: 1px solid ${props => props.theme.colors.menuHover};
    }
  }
`
export const NewInc = styled(Modal)``
