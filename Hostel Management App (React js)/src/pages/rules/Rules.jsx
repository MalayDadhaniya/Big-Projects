import React from "react";
import style from "./Rules.module.css";

function Rules() {
  return (
    <div className={style.rules_container}>
      <div className={style.rules_inner_container}>
        <div className={style.rules_title}>
          Rule'<span>s</span>
        </div>
        <div className="rules_all">
          <ol>
            <li>
              <strong>Check-In/Check-Out Time:</strong>
              <ul>
                <li>Check-in: 2:00 PM</li>
                <li>Check-out: 11:00 AM</li>
              </ul>
            </li>
            <li>
              <strong>Quiet Hours:</strong>
              <ul>
                <li>
                  Maintain silence from 10:00 PM to 7:00 AM to respect others'
                  rest.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cleanliness:</strong>
              <ul>
                <li>Keep your room and common areas clean and tidy.</li>
                <li>Dispose of trash in designated bins.</li>
              </ul>
            </li>
            <li>
              <strong>Guest Policy:</strong>
              <ul>
                <li>
                  No visitors are allowed in the hostel rooms after 9:00 PM.
                </li>
                <li>All guests must be registered at the reception.</li>
              </ul>
            </li>
            <li>
              <strong>Safety and Security:</strong>
              <ul>
                <li>Always lock your room when leaving.</li>
                <li>Report any suspicious activity to the hostel staff.</li>
              </ul>
            </li>
            <li>
              <strong>No Smoking/Alcohol:</strong>
              <ul>
                <li>
                  Smoking and alcohol consumption are strictly prohibited inside
                  the hostel premises.
                </li>
              </ul>
            </li>
            <li>
              <strong>Respect Others:</strong>
              <ul>
                <li>
                  Be considerate and respectful to fellow residents and staff.
                </li>
                <li>Avoid loud music or disruptive behavior.</li>
              </ul>
            </li>
            <li>
              <strong>Food and Beverages:</strong>
              <ul>
                <li>Food should be consumed only in the dining area.</li>
                <li>Keep the kitchen area clean after use.</li>
              </ul>
            </li>
            <li>
              <strong>Curfew:</strong>
              <ul>
                <li>
                  The main gate closes at 10:30 PM. Late entries are not allowed
                  without prior permission.
                </li>
              </ul>
            </li>
            <li>
              <strong>Personal Belongings:</strong>
              <ul>
                <li>
                  The hostel is not responsible for lost or stolen items. Secure
                  your valuables.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Rules;
