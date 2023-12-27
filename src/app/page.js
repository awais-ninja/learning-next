export default function Home() {
  return (
    <p>
      This is the main page of the application. It is where my application
      starts rendering. Not really though, as its an indirect rendering,
      initially since the layout is loaded the application begins from there,
      wraps the whole page.js inside whatever is being encapsulated with
      layout.js and so on.
    </p>
  );
}
