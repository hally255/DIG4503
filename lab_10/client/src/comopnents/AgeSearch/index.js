import React from "react";

class AgeSearch extends React.Component {
    readAge(event) {
        event.preventDefault();

        let element = document.getElementById("age");

        fetch("/employees/age/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            let report = document.getElementById("reportArea");

            if (processed.error) {
                report.innerHTML = processed.error;
            } else {
                report.innerHTML = processed.name;
            }
        });

        element.value = "";
    }

    render() {
        return (
            <div>
                <h2>Age</h2>
                <form onSubmit={this.readAge}>
                    <input id="age" type="text" />
                    <input type="submit" value="Submit" id="submitAge" />
                </form>
            </div>
        )
    }
}

export default AgeSearch;