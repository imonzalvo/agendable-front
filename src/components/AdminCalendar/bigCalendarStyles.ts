import { createGlobalStyle } from 'styled-components';

export interface GlobalStyleProps {
  shouldTransition?: boolean;
}

export default createGlobalStyle<GlobalStyleProps>`
.rbc-btn {
  color: inherit;
  font: inherit;
  margin: 0;
}

button.rbc-btn {
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled].rbc-btn {
  cursor: not-allowed;
}

button.rbc-input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.rbc-calendar {
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.rbc-calendar *,
.rbc-calendar *:before,
.rbc-calendar *:after {
  box-sizing: inherit;
}

.rbc-abs-full,
.rbc-row-bg {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.rbc-ellipsis,
.rbc-event-label,
.rbc-row-segment .rbc-event-content,
.rbc-show-more {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rbc-rtl {
  direction: rtl;
}

.rbc-off-range {
  color: #999999;
}

.rbc-off-range-bg {
  background: #e6e6e6;
}

.available-slot-bg {
  background: #fff !important
}

.rbc-header {
  overflow: hidden;
  flex: 1 0 0%;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* padding: 0 3px; */
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 90%;
  min-height: 0;
  border-bottom: 1px solid #ddd;
}
.rbc-header + .rbc-header {
  border-left: 1px solid #ddd;
}
.rbc-rtl .rbc-header + .rbc-header {
  border-left-width: 0;
  border-right: 1px solid #ddd;
}
.rbc-header > a,
.rbc-header > a:active,
.rbc-header > a:visited {
  color: inherit;
  text-decoration: none;
}

.rbc-row-content {
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  z-index: 4;
}

.rbc-today {
  /* background-color: #eaf6ff; */
}
/* 
.rbc-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
}
.rbc-toolbar .rbc-toolbar-label {
  flex-grow: 1;
  padding: 0 10px;
  text-align: center;
}
.rbc-toolbar button {
  color: #373a3c;
  display: inline-block;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  background: none;
  background-image: none;
  border: 1px solid #ccc;
  padding: 0.375rem 1rem;
  border-radius: 4px;
  line-height: normal;
  white-space: nowrap;
}
.rbc-toolbar button:active,
.rbc-toolbar button.rbc-active {
  background-image: none;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  background-color: #e6e6e6;
  border-color: #adadad;
}
.rbc-toolbar button:active:hover,
.rbc-toolbar button:active:focus,
.rbc-toolbar button.rbc-active:hover,
.rbc-toolbar button.rbc-active:focus {
  color: #373a3c;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.rbc-toolbar button:focus {
  color: #373a3c;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.rbc-toolbar button:hover {
  color: #373a3c;
  background-color: #e6e6e6;
  border-color: #adadad;
} */

.rbc-btn-group {
  display: inline-block;
  white-space: nowrap;
}
.rbc-btn-group > button:first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.rbc-btn-group > button:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.rbc-rtl .rbc-btn-group > button:first-child:not(:last-child) {
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.rbc-rtl .rbc-btn-group > button:last-child:not(:first-child) {
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.rbc-btn-group > button:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.rbc-btn-group button + button {
  margin-left: -1px;
}
.rbc-rtl .rbc-btn-group button + button {
  margin-left: 0;
  margin-right: -1px;
}
.rbc-btn-group + .rbc-btn-group,
.rbc-btn-group + button {
  margin-left: 10px;
}

.rbc-event {
  border: none;
  box-sizing: border-box;
  box-shadow: none;
  margin: 0;
  padding: 2px 5px;
  background-color: #d6f4ea;
  border-radius: 4px;
  color: #55aa8e;
  cursor: pointer;
  width: 100%;
  text-align: left;
}
.rbc-event:hover {
  background-color: #eafff8;
}
.rbc-slot-selecting .rbc-event {
  cursor: inherit;
  pointer-events: none;
}
.rbc-event:focus {
  outline: 5px auto #3b99fc;
}

.rbc-event-label {
  font-size: 80%;
}

.rbc-event-overlaps {
  box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
}

.rbc-event-continues-prior {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.rbc-event-continues-after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.rbc-event-continues-earlier {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.rbc-event-continues-later {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.rbc-row {
  display: flex;
  flex-direction: row;
}

.rbc-row-segment {
  padding: 0 1px 1px 1px;
}

.rbc-selected-cell {
  background-color: rgba(0, 0, 0, 0.1);
}

.rbc-show-more {
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 4;
  font-weight: bold;
  font-size: 85%;
  height: auto;
  line-height: normal;
}

.rbc-month-view {
  position: relative;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  width: 100%;
  user-select: none;
  -webkit-user-select: none;
  height: 100%;
}

.rbc-month-header {
  display: flex;
  flex-direction: row;
}

.rbc-month-row {
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1 0 0;
  flex-basis: 0px;
  overflow: hidden;
  height: 100%;
}
.rbc-month-row + .rbc-month-row {
  border-top: 1px solid #ddd;
}

.rbc-date-cell {
  flex: 1 1 0;
  min-width: 0;
  padding-right: 5px;
  text-align: right;
}
.rbc-date-cell.rbc-now {
  font-weight: bold;
}
.rbc-date-cell > a,
.rbc-date-cell > a:active,
.rbc-date-cell > a:visited {
  color: inherit;
  text-decoration: none;
}

.rbc-row-bg {
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  overflow: hidden;
  background-color: #f0f2f5;
}

.rbc-day-bg {
  flex: 1 0 0%;
}
.rbc-day-bg + .rbc-day-bg {
  border-left: 1px solid #ddd;
}
.rbc-rtl .rbc-day-bg + .rbc-day-bg {
  border-left-width: 0;
  border-right: 1px solid #ddd;
}

.rbc-overlay {
  position: absolute;
  z-index: 5;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  padding: 10px;
}
.rbc-overlay > * + * {
  margin-top: 1px;
}

.rbc-overlay-header {
  border-bottom: 1px solid #e5e5e5;
  margin: -10px -10px 5px -10px;
  padding: 2px 10px;
}

.rbc-agenda-view {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  overflow: auto;
}
.rbc-agenda-view table.rbc-agenda-table {
  width: 100%;
  border: 1px solid #ddd;
  border-spacing: 0;
  border-collapse: collapse;
}
.rbc-agenda-view table.rbc-agenda-table tbody > tr > td {
  padding: 5px 10px;
  vertical-align: top;
}
.rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell {
  padding-left: 15px;
  padding-right: 15px;
  text-transform: lowercase;
}
.rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
  border-left: 1px solid #ddd;
}
.rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
  border-left-width: 0;
  border-right: 1px solid #ddd;
}
.rbc-agenda-view table.rbc-agenda-table tbody > tr + tr {
  border-top: 1px solid #ddd;
}
.rbc-agenda-view table.rbc-agenda-table thead > tr > th {
  padding: 3px 5px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th {
  text-align: right;
}

.rbc-agenda-time-cell {
  text-transform: lowercase;
}
.rbc-agenda-time-cell .rbc-continues-after:after {
  content: ' »';
}
.rbc-agenda-time-cell .rbc-continues-prior:before {
  content: '« ';
}

.rbc-agenda-date-cell,
.rbc-agenda-time-cell {
  white-space: nowrap;
}

.rbc-agenda-event-cell {
  width: 100%;
}

.rbc-time-column {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: sticky;
}
.rbc-time-column .rbc-timeslot-group {
  flex: 1;
}

.rbc-timeslot-group {
  min-height: 40px;
  display: flex;
  flex-flow: column nowrap;
}

.rbc-timeslot-group:after {
  content: "";
  border-bottom: 1px solid rgb(242,242,242);
  position: relative;
  z-index: 2;
}

.rbc-time-gutter,
.rbc-header-gutter {
  flex: none;
}

.rbc-label {
  padding: 0 5px;
}

.rbc-day-slot {
  position: relative;
}
.rbc-day-slot .rbc-events-container {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  margin-right: 10px;
  top: 0;
}
.rbc-day-slot .rbc-events-container.rbc-rtl {
  left: 10px;
  right: 0;
}
.rbc-day-slot .rbc-event {
  border-top:1px solid #fff;
  border-bottom: 1px solid white;
  display: flex;
  max-height: 100%;
  min-height: 20px;
  flex-flow: column wrap;
  align-items: flex-start;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  z-index: 2
}
.rbc-day-slot .rbc-event-label {
  flex: none;
  padding-right: 5px;
  width: auto;
}
.rbc-day-slot .rbc-event-content {
  width: 100%;
  flex: 1 1 0;
  word-wrap: break-word;
  line-height: 1;
  height: 100%;
  min-height: 1em;
  font-weight: 600;
}

.rbc-day-slot .rbc-time-slot {
  border-top: 1px dashed rgb(244,244,244);
  background: linear-gradient(45deg,#f9f9f9 46%,rgba(0, 0, 0, 0.1) 46%,rgba(0, 0, 0, 0.1) 49%,#f9f9f9 55%);
  background-size:9.75px 9.75px;
  z-index:1;
 }

.rbc-time-view-resources .rbc-time-gutter,
.rbc-time-view-resources .rbc-time-header-gutter {
  left: 0;
  background-color: white;
  z-index: 8;
  margin-right: -1px;
}

.rbc-time-view-resources .rbc-time-header {
  overflow: hidden;
}

.rbc-time-view-resources .rbc-time-header-content {
  min-width: auto;
  flex: 1 0 0;
  flex-basis: 0px;
}

.rbc-time-view-resources .rbc-time-header-cell-single-day {
  display: none;
}

.rbc-time-view-resources .rbc-day-slot {
  min-width: 140px;
}

.rbc-time-view-resources .rbc-header,
.rbc-time-view-resources .rbc-day-bg {
  width: 140px;
  flex: 1 1 0;
  flex-basis: 0 px;
}

.rbc-time-header-content + .rbc-time-header-content {
  margin-left: -1px;
}

.rbc-time-slot {
  flex: 1 0 0;
}
.rbc-time-slot.rbc-now {
  font-weight: bold;
}

.rbc-day-header {
  text-align: center;
}

.rbc-slot-selection {
  z-index: 10;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 75%;
  width: 100%;
  padding: 3px;
}

.rbc-slot-selecting {
  cursor: move;
}

@keyframes fade-in-out {
  0%   { opacity: 1}
  50%  { opacity:  0.2}
  100% { opacity: 1}
}

.rbc-time-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  border: 1px solid #ddd;
  min-height: 0;
  animation: ${p => p.shouldTransition && 'fade-in-out 0.5s 1'}

}

.rbc-time-view .rbc-time-gutter {
  white-space: nowrap;
}
.rbc-time-view .rbc-allday-cell {
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  position: relative;
}
.rbc-time-view .rbc-allday-cell + .rbc-allday-cell {
  border-left: 1px solid #ddd;
}
.rbc-time-view .rbc-allday-events {
  position: relative;
  z-index: 4;
}
.rbc-time-view .rbc-row {
  box-sizing: border-box;
  min-height: 20px;
}

.rbc-time-header {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  position: fixed;
  z-index: 20;
  width: 100%;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.rbc-time-header.rbc-overflowing {
  border-right: 1px solid #ddd;
}
.rbc-rtl .rbc-time-header.rbc-overflowing {
  border-right-width: 0;
  border-left: 1px solid #ddd;
}
.rbc-time-header > .rbc-row:first-child {
  border-bottom: 1px solid #ddd;
}
.rbc-time-header > .rbc-row.rbc-row-resource {
  border-bottom: 1px solid #ddd;
}

.rbc-time-header-cell-single-day {
  display: none;
}

.rbc-time-header-content {
  flex: 1;
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-left: 1px solid #ddd;
}
.rbc-rtl .rbc-time-header-content {
  border-left-width: 0;
  border-right: 1px solid #ddd;
}
.rbc-time-header-content > .rbc-row.rbc-row-resource {
  border-bottom: 1px solid #ddd;
  flex-shrink: 0;
}

.rbc-time-content {
  display: flex;
  flex: 1 0 0%;
  align-items: flex-start;
  width: 100%;
  border-top: 2px solid #ddd;
  overflow-y: auto;
  position: relative;
  padding-top: 60px;
}
.rbc-time-content > .rbc-time-gutter {
  flex: none;
}
.rbc-time-content > * + * > * {
  border-left: 1px solid #ddd;
}
.rbc-rtl .rbc-time-content > * + * > * {
  border-left-width: 0;
  border-right: 1px solid #ddd;
}
.rbc-time-content > .rbc-day-slot {
  width: 100%;
  user-select: none;
  -webkit-user-select: none;
}

.rbc-current-time-indicator {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #74ad31;
  pointer-events: none;
}

.hovered {
  background: #eafff8 !important;
  padding: 0 5px;
  font-weight: 600;
  color: #5ed8b0;
  transition: padding ease-in-out 0.2s
}

.ant-layout.ant-layout-has-sider > .ant-layout, .ant-layout.ant-layout-has-sider > .ant-layout-content {
  overflow-x: initial;
  max-width: 100%;
}
`;
