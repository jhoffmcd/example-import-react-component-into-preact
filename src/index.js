import { h, render } from 'preact';

const TestComp = () => 
    <div>
        Hi, I am a component (Preact)
    </div>

render(
    <TestComp />,
    document.body
);