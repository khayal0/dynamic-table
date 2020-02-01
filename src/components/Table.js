import React from "react";
import "../components/Table.css";

export default function Table() {
  return (
    <div className="myTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Updated by</th>
            <th>Flex Id</th>
            <th>Company Id</th>
            <th>Created by</th>
            <th>Created by name</th>
            <th>Created date</th>
            <th>Customer type</th>
            <th>Email</th>
            <th>Tax Id</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="Name">
              <span>XIRDALAN İİT 2014 MMC</span>
            </td>
            <td data-column="Updated by">23</td>
            <td data-column="Flex Id">New York No. 1 Lake Park</td>
            <td data-column="Company Id">@james</td>
            <td data-column="Created by">James</td>
            <td data-column="Created by name">23</td>
            <td data-column="Created date">Chief Sandwich Eater Reater</td>
            <td data-column="Customer type">@james</td>
            <td data-column="Email">@james</td>
            <td data-column="Tax Id">@james</td>
            <td data-column="Status">
              <button className="statusBtn rejectedBtn">Rejected</button>
            </td>
          </tr>
          <tr>
            <td data-column="Name">
              <span>LİFE-ASSİST MMC</span>
            </td>
            <td data-column="Updated by">23</td>
            <td data-column="Flex Id">@james</td>
            <td data-column="Company Id">@james</td>
            <td data-column="Created by">James</td>
            <td data-column="Created by name">23</td>
            <td data-column="Created date">Chief Sandwich Eater Reater</td>
            <td data-column="Customer type">@james</td>
            <td data-column="Email">@james</td>
            <td data-column="Tax Id">@james</td>
            <td data-column="Status"></td>
          </tr>
          <tr>
            <td data-column="Name">
              <span>HATAMOV AYXAN ALIKRAM</span>
            </td>
            <td data-column="Updated by">23</td>
            <td data-column="Flex Id">@james</td>
            <td data-column="Company Id">@james</td>
            <td data-column="Created by">James</td>
            <td data-column="Created by name">23</td>
            <td data-column="Created date">Chief Sandwich Eater Reater</td>
            <td data-column="Customer type">@james</td>
            <td data-column="Email">@james</td>
            <td data-column="Tax Id">@james</td>
            <td data-column="Status"></td>
          </tr>
          <tr>
            <td data-column="Name">
              <span>PALFOOD MMC</span>
            </td>
            <td data-column="Updated by">23</td>
            <td data-column="Flex Id">@james</td>
            <td data-column="Company Id">@james</td>
            <td data-column="Created by">James</td>
            <td data-column="Created by name">23</td>
            <td data-column="Created date">Chief Sandwich Eater Reater</td>
            <td data-column="Customer type">@james</td>
            <td data-column="Email">@james</td>
            <td data-column="Tax Id">@james</td>
            <td data-column="Status">
              <button className="statusBtn waitingBtn">Waiting</button>
            </td>
          </tr>
          <tr>
            <td data-column="Name">
              <span>ÇAKIR YAPI VE KAMER</span>
            </td>
            <td data-column="Updated by">23</td>
            <td data-column="Flex Id">@james</td>
            <td data-column="Company Id">@james</td>
            <td data-column="Created by">James</td>
            <td data-column="Created by name">23</td>
            <td data-column="Created date">Chief Sandwich Eater Reater</td>
            <td data-column="Customer type">@james</td>
            <td data-column="Email">@james</td>
            <td data-column="Tax Id">@james</td>
            <td data-column="Status">
              <button className="statusBtn successBtn">Accepted</button>
            </td>
          </tr>
          <tr>
            <td data-column="Name">
              <span>PROSYS MMC</span>
            </td>
            <td data-column="Updated by">23</td>
            <td data-column="Flex Id">@james</td>
            <td data-column="Company Id">@james</td>
            <td data-column="Created by">James</td>
            <td data-column="Created by name">23</td>
            <td data-column="Created date">Chief Sandwich Eater Reater</td>
            <td data-column="Customer type">@james</td>
            <td data-column="Email">@james</td>
            <td data-column="Tax Id">@james</td>
            <td data-column="Status"></td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button className="pageChangePagination">&lt;</button>
        <button className="pageCountPagination">1</button>
        <button className="pageChangePagination">&gt;</button>
      </div>
    </div>
  );
}
