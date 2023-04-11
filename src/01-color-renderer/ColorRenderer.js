import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]


// const element = colors.map(color => <Color key = {color.hex} name = {color.name} hex = {color.hex} />)

export default function ColorRenderer ({colorRendererPropSetColor}) {

  return (
    <>{
      colors.map(color => <Color key = {color.hex} name = {color.name} hex = {color.hex} makeMode={colorRendererPropSetColor} />)
    }
    </>
    
    
    // <h2>
    //   Use the Color component to render each
    //    item in the colors array on the page!
    // </h2>
  )
}
