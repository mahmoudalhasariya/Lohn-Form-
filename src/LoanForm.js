

import React, { useState } from "react";
import "./FormStyls.css";
import Modal from "./Modal";

function LoanForm() {
    const [loanInput, setLoanInput] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salary: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loanInput); 
        setShowModal(true);
    };

    const isFormValid =
        loanInput.name !== "" &&
        loanInput.phoneNumber !== "" &&
        loanInput.age !== "" &&
        loanInput.salary !== "";

    return (
        <div className="form" style={{ flexDirection: "column" }}>
            <form
                id="loan-form"
                className="form"
                onSubmit={handleSubmit}
                style={{ flexDirection: "column" }}
            >
                <h1>Requesting a Loan</h1>
                <hr />

                <label>The Name:</label>
                <input
                    value={loanInput.name}
                    onChange={(e) =>
                        setLoanInput({ ...loanInput, name: e.target.value })
                    }
                />

                <label>Phone Number:</label>
                <input
                    value={loanInput.phoneNumber}
                    onChange={(e) =>
                        setLoanInput({ ...loanInput, phoneNumber: e.target.value })
                    }
                />

                <label>The Age:</label>
                <input
                    value={loanInput.age}
                    onChange={(e) =>
                        setLoanInput({ ...loanInput, age: e.target.value })
                    }
                />

                <label>Are you an employee?</label>
                <input
                    type="checkbox"
                    checked={loanInput.isEmployee}
                    onChange={(e) =>
                        setLoanInput({ ...loanInput, isEmployee: e.target.checked })
                    }
                />

                <label>Salary</label>
                <select
                    value={loanInput.salary}
                    onChange={(e) =>
                        setLoanInput({ ...loanInput, salary: e.target.value })
                    }
                >
                    <option value="">Please select your salary range</option>
                    <option>less than 500$</option>
                    <option>between 500$ and 2000$</option>
                    <option>above 2000</option>
                </select>

                <button id="sub-loan" disabled={!isFormValid}>
                    Submit
                </button>
            </form>

            {showModal && <Modal />}
        </div>
    );
}

export default LoanForm;


