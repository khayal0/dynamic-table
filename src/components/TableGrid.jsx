import React, { useState } from "react";
import "../components/TableGrid.scss";
import ModalFilter from "./ModalFilter";

// Grid Table features :
// show how much rows to display - pass quantity=true, default is true
// possible future features:
// search inside table
// go to page
// select quantity of rows
// sorting by column

export default function FlexTable(props) {
  const [state, setState] = useState(false);
  function handleClick() {
    setState({ state: !state });
  }

  return (
    <div className="table--grid--container">
      <div className="table--grid">
        <span>Name</span>
        <span>Updated</span>
        <span>Flex Id</span>
        <span>Company Id</span>
        <span>Created by</span>
        <span>Id</span>
        <span>Created date</span>
        <span>Customer type</span>
        <span>Email</span>
        <span>Tax Id</span>
        <span>
          <span>Status</span>
          <ModalFilter />
        </span>

        <span>
          <a href="https://google.com" alt="company">
            XIRDALAN İİT 2014 MMC
          </a>
        </span>
        <span>23</span>
        <span>New York No. 1 Lake Park</span>
        <span>@fooBar</span>
        <span>fooBar</span>
        <span>23</span>
        <span>
          align row and column width and height test test test test test test
        </span>
        <span>Customer type</span>
        <span>@fooBar</span>
        <span>@fooBar</span>
        <span>
          <button className="button--status__rejected"></button>
        </span>

        <span>
          <a href="https://google.com" alt="company">
            LİFE-ASSİST MMC
          </a>
        </span>
        <span>1</span>
        <span>@fooBar</span>
        <span>@fooBar</span>
        <span>@fooBar</span>
        <span>6</span>
        <span>23</span>
        <span>Customer type</span>
        <span>Email</span>
        <span>Tax Id</span>
        <span></span>

        <span>
          <a href="https://google.com" alt="company">
            HATAMOV AYXAN ALIKRAM
          </a>
        </span>
        <span>1</span>
        <span>Flex Id</span>
        <span>Company Id</span>
        <span>Created by</span>
        <span>01</span>
        <span>Chief Sandwich Eater Reater</span>
        <span>Customer type</span>
        <span>Email</span>
        <span>Tax Id</span>
        <span></span>

        <span>
          <a href="https://google.com" alt="company">
            PALFOOD MMC
          </a>
        </span>
        <span>0</span>
        <span>Flex Id</span>
        <span>Company Id</span>
        <span>Created by</span>
        <span>99</span>
        <span>Chief Sandwich Eater Reater</span>
        <span>Customer type</span>
        <span>Email</span>
        <span>Tax Id</span>
        <span>
          <button className="button--status__waiting"></button>
        </span>

        <span>
          <a href="https://google.com" alt="company">
            ÇAKIR YAPI VE KAMER
          </a>
        </span>
        <span>9</span>
        <span>Flex Id</span>
        <span>Company Id</span>
        <span>Created by</span>
        <span>CCC</span>
        <span>Chief Sandwich Eater Reater</span>
        <span>Customer type</span>
        <span>Email</span>
        <span>Tax Id</span>
        <span></span>

        <span>
          <a href="https://google.com" alt="company">
            ÇAKIR YAPI VE KAMER
          </a>
        </span>
        <span>9</span>
        <span>Flex Id</span>
        <span>Company Id</span>
        <span>Created by</span>
        <span>CCC</span>
        <span>Chief Sandwich Eater Reater</span>
        <span>Customer type</span>
        <span>Email</span>
        <span>Tax Id</span>
        <span>
          <button className="button--status__accepted"></button>
        </span>
      </div>
      <div className="pagination">
        <button className="pageChangePagination">&lt;</button>
        <button className="pageCountPagination">1</button>
        <button className="pageCountPagination">2</button>
        <button className="pageCountPagination">3</button>
        <button className="pageChangePagination">&gt;</button>
      </div>
    </div>
  );
}
