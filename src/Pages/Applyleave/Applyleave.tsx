import { useState, useEffect } from "react";
import "../../Styles/Applyleave.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { SingleValue } from "react-select";
import axios from "axios";
import toast from "react-hot-toast";

const leaveTypeOptions = [
  { value: "Personal Leave", label: "Personal Leave" },
  { value: "Medical Leave", label: "Medical Leave" },
  { value: "Casual Leave", label: "Casual Leave" },
];

interface TeamLeaderOption {
  value: string;
  label: string;
}

const Applyleave = () => {
  const [fromdate, setFromDate] = useState<Date | null>(null);
  const [todate, setToDate] = useState<Date | null>(null);
  const [teamLeaderOptions, setTeamLeaderOptions] = useState<
    TeamLeaderOption[]
  >([]);
  const [selectedTeamLeader, setSelectedTeamLeader] =
    useState<SingleValue<TeamLeaderOption>>(null);
  const [selectedLeaveType, setSelectedLeaveType] =
    useState<SingleValue<{ value: string; label: string }>>(null);
  const [leaveReason, setLeaveReason] = useState("");

  useEffect(() => {
    const fetchTeamLeaders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/getallteamleader"
        );
        if (response.data && Array.isArray(response.data.data)) {
          const options = response.data.data.map(
            (leader: { _id: string; Firstname: string; Lastname: string }) => ({
              value: leader._id,
              label: `${leader.Firstname} ${leader.Lastname}`,
            })
          );
          setTeamLeaderOptions(options);
        } else {
          console.error("Unexpected API response structure:", response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeamLeaders();
  }, []);

  const applyleavesubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // const data = {
    //   fromDate: "",
    //   toDate: "",
    //   selectTeamLeader: "",
    //   leaveType: "",
    //   leaveReason: "",
    // };

    const data = {
      fromDate: fromdate ? fromdate.toISOString().split("T")[0] : "",
      toDate: todate ? todate.toISOString().split("T")[0] : "",
      selectTeamLeader: selectedTeamLeader?.value, // Extract value from selectedTeamLeader object
      leaveType: selectedLeaveType?.value,
      leaveReason: leaveReason,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/applyleave",
        data
      );
      toast.success(response.data.message, { position: "top-right" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="applyleave">
      <div className="applyleave-top-section shadow">
        <h3>Apply Leave</h3>
      </div>
      <div className="applyleave-bottom-section shadow">
        <form className="content-section" onSubmit={applyleavesubmit}>
          <div>
            <label>From Date</label>
            <DatePicker
              selected={fromdate}
              name="fromDate"
              id="fromDate"
              value={fromdate}
              onChange={(date) => setFromDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select a date"
            />
          </div>
          <div>
            <label>To Date</label>
            <DatePicker
              selected={todate}
              name="toDate"
              id="toDate"
              value={todate}
              onChange={(date) => setToDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select a date"
            />
          </div>
          <div>
            <label>Select Team Leader</label>
            <Select
              name="selectTeamLeader"
              id="selectTeamLeader"
              value={selectedTeamLeader}
              onChange={setSelectedTeamLeader}
              options={teamLeaderOptions}
              placeholder="Choose..."
            />
          </div>
          <div>
            <label>Leave Type</label>
            <Select
              name="leaveType"
              id="leaveType"
              value={selectedLeaveType}
              onChange={setSelectedLeaveType}
              options={leaveTypeOptions}
              placeholder="Choose..."
            />
          </div>
          <div>
            <label>Leave Reason</label>
            <textarea
              name="leaveReason"
              id="leaveReason"
              placeholder="reason"
              value={leaveReason}
              onChange={(e) => setLeaveReason(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary">Apply Leave</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Applyleave;
