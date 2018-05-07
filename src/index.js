import { h, render } from 'preact';
import { MyModule } from 'example-react-component-export'; // Linked locally via "npm link"

// This component renders correctly.
const TestComp = () => 
    <div>
        Hi, I am a component (Preact)
    </div>

// MyModule throws "Module not found: Error: Can't resolve 'react' in..."
render(
    <div>
        <MyModule />
        <TestComp />
    </div>,
    document.body
);