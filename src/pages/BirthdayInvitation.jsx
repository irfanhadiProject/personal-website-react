function BirthdayInvitation() {
  return (
    <article>
      <div className="container">
        <h1>My birthday party!</h1>
        <h2>On the 3rd September</h2>
        <img
          src="https://raw.githubusercontent.com/appbrewery/webdev/main/birthday-cake3.4.jpeg"
          alt="It's a birhday cake"
        />

        <h3>What to bring:</h3>
        <ul>
          <li>Yourself</li>
          <li>A present</li>
          <li>More present</li>
          <li>Money (optional)</li>
        </ul>

        <h3>Location:</h3>
        <a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,75y,289.6h,87.01t,0.72r/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656">
          This is Google map location
        </a>

        <h3>Dresscode:</h3>
        <p>your latest suit that you wear</p>

        <h3>Password:</h3>
        <p>
          Q: who is this? <br />
          A: Joe
        </p>
      </div>
    </article>
  );
}

export default BirthdayInvitation;
