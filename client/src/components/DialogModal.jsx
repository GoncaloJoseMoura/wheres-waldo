export default function DialogModal({ modalRef, timer, submitAction }) {
  return (
    <dialog ref={modalRef}>
      <h2>
        You finished in
        {timer !== null && ` ${timer}ms`}
      </h2>
      <hr />
      <form onSubmit={submitAction}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" placeholder="Don't put your real name" required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </dialog>
  );
}
