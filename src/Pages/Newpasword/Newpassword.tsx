import '../../Styles/Newpassword.css'
const Newpassword = () => {
  return (
    <div className="newpassword">
      <div className="newpassword-top-section shadow">
        <h3>Change Password</h3>
      </div>
      <div className="newpassword-bottom-section shadow">
        <div className="maincontent-section">
          <div>
            <label>Current Password</label>
            <input></input>
          </div>
          <div>
            <label>New Password</label>
            <input></input>
          </div>
          <div>
            <label>Re-Enter New Password</label>
            <input></input>
          </div>
          <div>
            <button className="nbtn btn-primary">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpassword;
