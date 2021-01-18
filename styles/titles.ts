import styled from 'styled-components'
import {primaryColor} from "../helpers/styles";


interface PropsTitleH1 {
    color?: string,
    fontWeight?: number | string,
    textAlign?: string,
    fontSize?: string,
    margin?: string | number,
}

export const Title = styled.h1<PropsTitleH1>`
    text-align: ${({textAlign}) => textAlign+''};    
    position: relative;
    padding: 0;
    margin: ${({margin}) => margin };
    letter-spacing: 0.1em;
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color };
    text-transform: uppercase;
    font-size: ${({fontSize}) => fontSize };
    .word2 {
      display: inline-block;
      font-weight: 700;
      text-shadow: 0 0 3px ${primaryColor};
      color: ${primaryColor};
    }
   .shadow {
    color: #fff;
    z-index: -1;
    position: absolute;
    font-size: 1.7em;
    width: 100%;
    opacity: 0.2;
    left: 50%;
    top: 50%;
    display: flex;
    align-items: center;
    transform: translate(-50%, -50%);
    &:after,
    &:before {
      content: '';
      width: 50%;
      height: 1px;
      background: white;
    }
  }
`
Title.defaultProps = {
    color : '#fff',
    fontWeight: 300,
    fontSize: '2.5em',
    margin: 0,
    textAlign: 'left',
}


interface PropsTitleH2 {
    color?: string,
    fontWeight?: number | string,
    textAlign?: string,
    fontSize?: string,
    margin?: string | number,
}

export const Subtitle = styled.h2<PropsTitleH2>`
    text-align: ${({textAlign}) => textAlign+''};    
    position: relative;
    padding: 0;
    margin: ${({margin}) => margin };
    letter-spacing: 0.1em;
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color };
    text-transform: uppercase;
    font-size: ${({fontSize}) => fontSize };
    .word2 {
      display: inline-block;
      font-weight: 700;
      text-shadow: 0 0 3px ${primaryColor};
      color: ${primaryColor};
    }
   .shadow {
    color: #fff;
    z-index: -1;
    position: absolute;
    font-size: 1.7em;
    width: 100%;
    opacity: 0.2;
    left: 50%;
    top: 50%;
    display: flex;
    align-items: center;
    transform: translate(-50%, -50%);
    &:after,
    &:before {
      content: '';
      width: 50%;
      height: 1px;
      background: white;
    }
  }
`
Title.defaultProps = {
    color : '#fff',
    fontWeight: 300,
    fontSize: '2.5em',
    margin: 0,
    textAlign: 'left',
}

Subtitle.defaultProps = {
    color : '#fff',
    fontWeight: 300,
    fontSize: '2em',
    margin: 0,
    textAlign: 'left',
}
