import styled from "styled-components";
import {paletteColor} from "../../../../styles/variables";

interface PropBackDrop {
    active?: boolean,
}

interface PropModal {
    active?: boolean,
}

export const Backdrop = styled.div<PropBackDrop>`
  width: 100%;
  min-height: 100%;
  display: block;
  position: absolute;
  top: 0;
  transition: all 0.4s ease-in-out;
  opacity: ${props => (props.active ? 0.7 : 0)};
  left: 0;
  background: #000;
  z-index: ${props => (props.active ? 20 : 0)};
`
export const ContainerModal = styled.div<PropModal>`
  color: #fff;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translateX(${props => (props.active ? 0 : 100)}%);
  transition: transform ease-in-out 0.4s;
  z-index: 20;
  background: rgba(10, 10, 10, 0.7);
  position: fixed;
  width: 40rem;
  max-width: 100%;
  height: 100%;
  top: 0;
  right: 0;

  .modal-wrapper {
    position: relative;
    height: calc(100vh - 4rem);
    padding: 1.5rem;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.7em;
      height: 1em;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: solid 1px rgb(240, 240, 240);

      &:hover {
        border-color: ${paletteColor.primaryColor};
      }
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      position: fixed;
      border-left: solid 1px rgb(240, 240, 240);
    }
  }

  .images {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }

  .gallery-images {
    display: flex;

    z-index: 2;
    height: 5rem;

    padding: .5rem 0;


    img {
      max-height: 100%;
      width: auto;
      margin: 0 .5rem;
      object-fit: cover;
      cursor: pointer;
      height: 90%;
      opacity: .7;
      border: solid 1px rgba(255, 255, 255, .1);
      transition: all .3s ease-in-out;

      &.active {
        height: 100%;
        border-color: ${paletteColor.primaryColor};
        opacity: 1;
      }
    }
  }

  .date {
    margin-bottom: 1rem;
  }

  .description {
    p {
      margin: 0;
      padding: 0;
      font-size: 1.2em;
      margin-bottom: 1rem;
    }
  }

  h4 {
    font-size: 1.8em;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    padding: 0;
    width: 100%;
    text-align: center;
    position: relative;
    margin-bottom: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;

    &:after,
    &:before {
      content: '';
      flex: 1;
      margin: 0.3em;
      background: rgb(100, 100, 100);
      height: 1px;
    }
  }

  .link {
    text-decoration: none;
    color: white;
    cursor: pointer;
    border: solid 1px white;
    border-radius: 50%;
    width: auto;
    height: auto;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;

    &:hover {
      color: ${paletteColor.primaryColor};
      border-color: ${paletteColor.primaryColor};
    }
  }

  .modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.5rem;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    align-items: center;
    position: relative;
    z-index: 3;
    top: 0;
    right: 0;
    width: 100%;
    height: 4rem;
    border-bottom: solid 1px rgb(255, 255, 255, 0.3);

    justify-content: flex-end;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    span {
      text-align: center;
      border: 1px solid ${paletteColor.primaryColor};
      color: ${paletteColor.primaryColor};
      border-radius: 500px;
      flex: 1;
      font-weight: 300;
      padding: 0.5rem 0.7rem;
      margin: 0.5rem;
    }
  }

  .modal-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    a {
      text-decoration: none;
      color: ${paletteColor.primaryColor};
    }
  }
`
