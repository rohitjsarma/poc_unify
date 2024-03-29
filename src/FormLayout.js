import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { Resizable } from 'react-resizable'; // Import Resizable from react-resizable
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const FormLayout = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
    { i: 'b', x: 2, y: 0, w: 2, h: 2 },
    { i: 'c', x: 4, y: 0, w: 2, h: 2 },
  ];

  return (
    <ResponsiveReactGridLayout className='layout' layouts={{ lg: layout }}>
      <div key='a' data-grid={{ x: 0, y: 0, w: 2, h: 2 }}>
        <Resizable
          width={200}
          height={50}
          minConstraints={[100, 30]}
        >
          <div style={{ width: '100%', height: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
            <input type='text' placeholder='Enter text' style={{ width: '100%', height: '100%', border: 'none', outline: 'none', background: 'transparent' }} />
          </div>
        </Resizable>
      </div>
      <div key='b' data-grid={{ x: 2, y: 0, w: 2, h: 2 }}>
        <Resizable
          width={200}
          height={50}
          minConstraints={[100, 30]}
        >
          <div style={{ width: '100%', height: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
            <input type='checkbox' style={{ width: '100%', height: '100%', border: 'none', outline: 'none', background: 'transparent' }} />
            <label htmlFor='checkbox'>Checkbox</label>
          </div>
        </Resizable>
      </div>
      <div key='c' data-grid={{ x: 4, y: 0, w: 2, h: 2 }}>
        <Resizable
          width={200}
          height={50}
          minConstraints={[100, 30]}
        >
          <div style={{ width: '100%', height: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
            <select style={{ width: '100%', height: '100%', border: 'none', outline: 'none', background: 'transparent' }}>
              <option value=''>Select</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </select>
          </div>
        </Resizable>
      </div>
    </ResponsiveReactGridLayout>
  );
};

export default FormLayout;
