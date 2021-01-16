import dynamic from 'next/dynamic'
import styled from 'styled-components'

export default function Test() {

    const Masonry = dynamic(
        () => {
            return import("masonry-layout").then((Masonry) => {
                var elem = document.querySelector('.grid');
                var msnry = new Masonry(elem, {
                    // options
                    itemSelector: '.grid-item',
                    columnWidth: 200
                });

// element argument can be a selector string
//   for an individual element
                var msnry = new Masonry.default('.grid', {
                    // options
                });
            })
        },
        {ssr: false}
    );
    return (
        <Container>
            asasas
            <Masonry/>
            <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item grid-item--width2 grid-item--height2"></div>
                <div className="grid-item grid-item--height3"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--width3"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--width2 grid-item--height3"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--width2 grid-item--height2"></div>
                <div className="grid-item grid-item--width2"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height3"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
            </div>
        </Container>
    )
}
const Container = styled.div`
  .grid {
    background: #EEE;
    max-width: 1200px;
  }

  /* clearfix */

  .grid:after {
    content: '';
    display: block;
    clear: both;
  }

  /* ---- grid-item ---- */

  .grid-item {
    width: 160px;
    height: 120px;
    float: left;
    background: #D26;
    border: 2px solid #333;
    border-color: hsla(0, 0%, 0%, 0.5);
    border-radius: 5px;
  }

  .grid-item--width2 {
    width: 320px;
  }

  .grid-item--width3 {
    width: 480px;
  }

  .grid-item--width4 {
    width: 640px;
  }

  .grid-item--height2 {
    height: 200px;
  }

  .grid-item--height3 {
    height: 260px;
  }

  .grid-item--height4 {
    height: 360px;
  }


  .grid-item--gigante {
    width: 320px;
    height: 360px;
    background: #F90;
    z-index: 2; /* above other items */
  }

  .grid-item:hover {
    background: #A2C;
    border-color: white;
    cursor: pointer;
  }
`
