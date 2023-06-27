import image from './assets/image.png'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'


const text = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolor, eius fuga id in ipsa minus nam necessitatibus non obcaecati odit officiis pariatur, quibusdam sequi temporibus velit, voluptatem? Ab adipisci ea error et ipsum mollitia officia perferendis possimus voluptatem. Architecto cum deserunt dolore doloremque et illo natus ratione repellendus. Eligendi.
`
export const model = [
    new TitleBlock ('Hello world from JS', {
        tag : 'h2',
        styles : {
            background : 'linear-gradient(to right, #ff0099, #493240)',
            color : '#fff',
            padding : '30px',
            'text-align' : 'center',
        },
    }),
    new ImageBlock (image, {
        styles : {
            padding : '2rem',
            display : 'flex',
            'justify-content' : 'center'
        }, imageStyles : {
            width : '500px',
            height : 'auto'
        },
        alt : 'top-image'
    }),
    new ColumnsBlock ([
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, optio.',
        'Aliquam at dignissimos et facilis illum ipsum iste iure maxime minus,',
        'Aspernatur blanditiis dolores facere totam! Asperiores, necessitatibus, velit.'
    ], {
        styles : {
            background : 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding : '2rem',
            color : '#fff',
            'font-weight' : 'bold'
        }
    }),
    new TextBlock ( text, {
        styles : {
            background : 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding : '1rem',
            'font-weight' : 'bold'
        }
    }),
]
