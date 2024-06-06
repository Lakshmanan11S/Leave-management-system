import '../../Styles/Myleave.css'
const Myleaves = () => {
  return (
    <div className="myleaves">
      <div className="myleave-top-section shadow">
        <h3>My Leaves</h3>
      </div>
      <div className='myleave-bottom-section shadow'>
      <table className='myleave-main-table'>
          <thead>
            <tr>
              <th>From Date</th>
              <th>To Date</th>
              <th>No Of Days</th>
              <th>Leave Type</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td>29/05/2024</td>
              <td>30/05/2024</td>
              <td>3</td>
              <td>Personal</td>
              <td>Going to temple</td>
              <td>
                <button className='btn btn-success'>Accepted</button>
               </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Myleaves