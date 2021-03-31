import React from "react";

class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault();

        let element = document.getElementById("name");

        fetch("/employees/name/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            let report = document.getElementById("reportArea");

            if (processed.error) {
                report.innerHTML = processed.error;
            } else {
                report.innerHTML = processed.age;
            }
        });

        element.value = "";
    }

    render() {
        return (
            <div>
                <h2>Name</h2>
                <form onSubmit={this.readName}>
                    <input id="name" type="text" />
                    <input type="submit" value="Submit" id="submitName" />
                </form>
            </div >
        )
    }
}

export default NameSearch;