import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div id="kt_body" className="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-disabled">
        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="page d-flex flex-row flex-column-fluid">
            {/*begin::Aside*/}
            <div
              id="kt_aside"
              className="aside"
              data-kt-drawer="true"
              data-kt-drawer-name="aside"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="auto"
              data-kt-drawer-direction="start"
              data-kt-drawer-toggle="#kt_aside_toggle"
            >
              {/*begin::Logo*/}
              <div
                className="aside-logo flex-column-auto pt-10 pt-lg-20"
                id="kt_aside_logo"
              >
                <a href="../../demo9/dist/index.html">
                  <img
                    alt="Logo"
                    src="assets/media/logos/demo9.svg"
                    className="h-40px"
                  />
                </a>
              </div>
              {/*end::Logo*/}
              {/*begin::Nav*/}
              <div
                className="aside-menu flex-column-fluid pt-0 pb-7 py-lg-10"
                id="kt_aside_menu"
              >
                {/*begin::Aside menu*/}
                <div
                  id="kt_aside_menu_wrapper"
                  className="w-100 hover-scroll-overlay-y scroll-ps d-flex"
                  data-kt-scroll="true"
                  data-kt-scroll-height="auto"
                  data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                  data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
                  data-kt-scroll-offset={0}
                >
                  <div
                    id="kt_aside_menu"
                    className="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-icon-gray-400 menu-arrow-gray-400 fw-semibold fs-6 my-auto"
                    data-kt-menu="true"
                  >
                    {/*begin:Menu item*/}
                    <div
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item py-2"
                    >
                      {/*begin:Menu link*/}
                      <span className="menu-link menu-center">
                        <span className="menu-icon me-0">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                          <span className="svg-icon svg-icon-2x">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={9}
                                height={9}
                                rx={2}
                                fill="currentColor"
                              />
                              <rect
                                opacity="0.3"
                                x={13}
                                y={2}
                                width={9}
                                height={9}
                                rx={2}
                                fill="currentColor"
                              />
                              <rect
                                opacity="0.3"
                                x={13}
                                y={13}
                                width={9}
                                height={9}
                                rx={2}
                                fill="currentColor"
                              />
                              <rect
                                opacity="0.3"
                                x={2}
                                y={13}
                                width={9}
                                height={9}
                                rx={2}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      {/*end:Menu link*/}
                      {/*begin:Menu sub*/}
                      <div className="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu content*/}
                          <div className="menu-content">
                            <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                              Home
                            </span>
                          </div>
                          {/*end:Menu content*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <a className="menu-link" href="../../demo9/dist/index.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Default</span>
                          </a>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        
                       
                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    
                  </div>
                </div>
                {/*end::Aside menu*/}
              </div>
              {/*end::Nav*/}
              {/*begin::Footer*/}
              <div
                className="aside-footer flex-column-auto pb-5 pb-lg-10"
                id="kt_aside_footer"
              >
                {/*begin::Menu*/}
                <div
                  className="d-flex flex-center w-100 scroll-px"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-dismiss="click"
                  title="Quick actions"
                >
                  <button
                    type="button"
                    className="btn btn-custom"
                    data-kt-menu-trigger="click"
                    data-kt-menu-overflow="true"
                    data-kt-menu-placement="top-start"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr076.svg*/}
                    <span className="svg-icon svg-icon-2x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.3"
                          width={12}
                          height={2}
                          rx={1}
                          transform="matrix(-1 0 0 1 15.5 11)"
                          fill="currentColor"
                        />
                        <path
                          d="M13.6313 11.6927L11.8756 10.2297C11.4054 9.83785 11.3732 9.12683 11.806 8.69401C12.1957 8.3043 12.8216 8.28591 13.2336 8.65206L16.1592 11.2526C16.6067 11.6504 16.6067 12.3496 16.1592 12.7474L13.2336 15.3479C12.8216 15.7141 12.1957 15.6957 11.806 15.306C11.3732 14.8732 11.4054 14.1621 11.8756 13.7703L13.6313 12.3073C13.8232 12.1474 13.8232 11.8526 13.6313 11.6927Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </button>
                  {/*begin::Menu 2*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                    data-kt-menu="true"
                  >
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                        Quick Actions
                      </div>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator mb-3 opacity-75" />
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Ticket
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Customer
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      {/*begin::Menu item*/}
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">New Group</span>
                        <span className="menu-arrow" />
                      </a>
                      {/*end::Menu item*/}
                      {/*begin::Menu sub*/}
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Admin Group
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Staff Group
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a href="#" className="menu-link px-3">
                            Member Group
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu sub*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        New Contact
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator mt-3 opacity-75" />
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <div className="menu-content px-3 py-3">
                        <a className="btn btn-primary btn-sm px-4" href="#">
                          Generate Reports
                        </a>
                      </div>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu 2*/}
                </div>
                {/*end::Menu*/}
              </div>
              {/*end::Footer*/}
            </div>
            {/*end::Aside*/}
            {/*begin::Wrapper*/}
            <div
              className="wrapper d-flex flex-column flex-row-fluid"
              id="kt_wrapper"
            >
              {/*begin::Header tablet and mobile*/}
              <div className="header-mobile py-3">
                {/*begin::Container*/}
                <div className="container d-flex flex-stack">
                  {/*begin::Mobile logo*/}
                  <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                    <a href="../../demo9/dist/index.html">
                      <img
                        alt="Logo"
                        src="assets/media/logos/demo9.svg"
                        className="h-35px"
                      />
                    </a>
                  </div>
                  {/*end::Mobile logo*/}
                  {/*begin::Aside toggle*/}
                  <button
                    className="btn btn-icon btn-active-color-primary"
                    id="kt_aside_toggle"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                    <span className="svg-icon svg-icon-2x me-n1">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.3"
                          d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </button>
                  {/*end::Aside toggle*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Header tablet and mobile*/}
              {/*begin::Header*/}
              <div
                id="kt_header"
                className="header py-6 py-lg-0"
                data-kt-sticky="true"
                data-kt-sticky-name="header"
                data-kt-sticky-offset="{lg: '300px'}"
              >
                {/*begin::Container*/}
                <div className="header-container container-xxl">
                  {/*begin::Page title*/}
                  <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 py-3 py-lg-0 me-3">
                    {/*begin::Heading*/}
                    <h1 className="d-flex flex-column text-dark fw-bold my-1">
                      <span className="text-white fs-1">About Us</span>
                    </h1>
                    {/*end::Heading*/}
                    {/*begin::Breadcrumb*/}
                    <ul className="breadcrumb breadcrumb-line fw-semibold fs-7 my-1">
                      <li className="breadcrumb-item text-gray-600">
                        <a
                          href="../../demo9/dist/index.html"
                          className="text-gray-600"
                        >
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item text-gray-600">Pages</li>
                      <li className="breadcrumb-item text-gray-600">Corporate</li>
                      <li className="breadcrumb-item text-gray-400">About</li>
                    </ul>
                    {/*end::Breadcrumb*/}
                  </div>
                  {/*end::Page title=*/}
                  {/*begin::Wrapper*/}
                  <div className="d-flex align-items-center flex-wrap">
                    {/*begin::Search*/}
                    <div className="header-search py-3 py-lg-0 me-3">
                      {/*begin::Search*/}
                      <div
                        id="kt_header_search"
                        className="header-search d-flex align-items-center w-lg-250px"
                        data-kt-search-keypress="true"
                        data-kt-search-min-length={2}
                        data-kt-search-enter="enter"
                        data-kt-search-layout="menu"
                        data-kt-search-responsive="false"
                        data-kt-menu-trigger="auto"
                        data-kt-menu-permanent="true"
                        data-kt-menu-placement="bottom-end"
                      >
                        {/*begin::Form*/}
                        <form
                          data-kt-search-element="form"
                          className="w-100 position-relative"
                          autoComplete="off"
                        >
                          {/*begin::Hidden input(Added to disable form autocomplete)*/}
                          <input type="hidden" />
                          {/*end::Hidden input*/}
                          {/*begin::Icon*/}
                          {/*begin::Svg Icon | path: icons/duotune/general/gen004.svg*/}
                          <span className="svg-icon svg-icon-2 search-icon position-absolute top-50 translate-middle-y ms-4">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          {/*end::Icon*/}
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control custom-form-control ps-13"
                            name="search"
                            defaultValue=""
                            placeholder="Find Goods"
                            data-kt-search-element="input"
                          />
                          {/*end::Input*/}
                          {/*begin::Spinner*/}
                          <span
                            className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                            data-kt-search-element="spinner"
                          >
                            <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                          </span>
                          {/*end::Spinner*/}
                          {/*begin::Reset*/}
                          <span
                            className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                            data-kt-search-element="clear"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  opacity="0.5"
                                  x={6}
                                  y="17.3137"
                                  width={16}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 6 17.3137)"
                                  fill="currentColor"
                                />
                                <rect
                                  x="7.41422"
                                  y={6}
                                  width={16}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 7.41422 6)"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </span>
                          {/*end::Reset*/}
                        </form>
                        {/*end::Form*/}
                        {/*begin::Menu*/}
                        <div
                          data-kt-search-element="content"
                          className="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden"
                        >
                          {/*begin::Wrapper*/}
                          <div data-kt-search-element="wrapper">
                            {/*begin::Recently viewed*/}
                            <div data-kt-search-element="results" className="d-none">
                              {/*begin::Items*/}
                              <div className="scroll-y mh-200px mh-lg-350px">
                                {/*begin::Category title*/}
                                <h3
                                  className="fs-5 text-muted m-0 pb-5"
                                  data-kt-search-element="category-title"
                                >
                                  Users
                                </h3>
                                {/*end::Category title*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <img
                                      src="assets/media/avatars/300-6.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Karina Clark
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      Marketing Manager
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <img
                                      src="assets/media/avatars/300-2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Olivia Bold
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      Software Engineer
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <img
                                      src="assets/media/avatars/300-9.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Ana Clark
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      UI/UX Designer
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <img
                                      src="assets/media/avatars/300-14.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Nick Pitola
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      Art Director
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <img
                                      src="assets/media/avatars/300-11.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Edward Kulnic
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      System Administrator
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Category title*/}
                                <h3
                                  className="fs-5 text-muted m-0 pt-5 pb-5"
                                  data-kt-search-element="category-title"
                                >
                                  Customers
                                </h3>
                                {/*end::Category title*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      <img
                                        className="w-20px h-20px"
                                        src="assets/media/svg/brand-logos/volicity-9.svg"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Company Rbranding
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      UI Design
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      <img
                                        className="w-20px h-20px"
                                        src="assets/media/svg/brand-logos/tvit.svg"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Company Re-branding
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      Web Development
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      <img
                                        className="w-20px h-20px"
                                        src="assets/media/svg/misc/infography.svg"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Business Analytics App
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      Administration
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      <img
                                        className="w-20px h-20px"
                                        src="assets/media/svg/brand-logos/leaf.svg"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      EcoLeaf App Launch
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      Marketing
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      <img
                                        className="w-20px h-20px"
                                        src="assets/media/svg/brand-logos/tower.svg"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column justify-content-start fw-semibold">
                                    <span className="fs-6 fw-semibold">
                                      Tower Group Website
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      Google Adwords
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Category title*/}
                                <h3
                                  className="fs-5 text-muted m-0 pt-5 pb-5"
                                  data-kt-search-element="category-title"
                                >
                                  Projects
                                </h3>
                                {/*end::Category title*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={7}
                                            y={17}
                                            width={6}
                                            height={2}
                                            rx={1}
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={7}
                                            y={12}
                                            width={10}
                                            height={2}
                                            rx={1}
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={7}
                                            y={7}
                                            width={6}
                                            height={2}
                                            rx={1}
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <span className="fs-6 fw-semibold">
                                      Si-Fi Project by AU Themes
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      #45670
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <rect
                                            x={8}
                                            y={9}
                                            width={3}
                                            height={10}
                                            rx="1.5"
                                            fill="currentColor"
                                          />
                                          <rect
                                            opacity="0.5"
                                            x={13}
                                            y={5}
                                            width={3}
                                            height={14}
                                            rx="1.5"
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={18}
                                            y={11}
                                            width={3}
                                            height={8}
                                            rx="1.5"
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={3}
                                            y={13}
                                            width={3}
                                            height={6}
                                            rx="1.5"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <span className="fs-6 fw-semibold">
                                      Shopix Mobile App Planning
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      #45690
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={6}
                                            y={12}
                                            width={7}
                                            height={2}
                                            rx={1}
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={6}
                                            y={7}
                                            width={12}
                                            height={2}
                                            rx={1}
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <span className="fs-6 fw-semibold">
                                      Finance Monitoring SAAS Discussion
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      #21090
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <a
                                  href="#"
                                  className="d-flex text-dark text-hover-primary align-items-center mb-5"
                                >
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/communication/com006.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={18}
                                          height={18}
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                            fill="currentColor"
                                          />
                                          <rect
                                            x={7}
                                            y={6}
                                            width={4}
                                            height={4}
                                            rx={2}
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <span className="fs-6 fw-semibold">
                                      Dashboard Analitics Launch
                                    </span>
                                    <span className="fs-7 fw-semibold text-muted">
                                      #34560
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </a>
                                {/*end::Item*/}
                              </div>
                              {/*end::Items*/}
                            </div>
                            {/*end::Recently viewed*/}
                            {/*begin::Recently viewed*/}
                            <div className="" data-kt-search-element="main">
                              {/*begin::Heading*/}
                              <div className="d-flex flex-stack fw-semibold mb-4">
                                {/*begin::Label*/}
                                <span className="text-muted fs-6 me-2">
                                  Recently Searched:
                                </span>
                                {/*end::Label*/}
                                {/*begin::Toolbar*/}
                                <div
                                  className="d-flex"
                                  data-kt-search-element="toolbar"
                                >
                                  {/*begin::Preferences toggle*/}
                                  <div
                                    data-kt-search-element="preferences-show"
                                    className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle="
                                    title="Show search preferences"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/coding/cod001.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </div>
                                  {/*end::Preferences toggle*/}
                                  {/*begin::Advanced search toggle*/}
                                  <div
                                    data-kt-search-element="advanced-options-form-show"
                                    className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1"
                                    data-bs-toggle="tooltip"
                                    title="Show more search options"
                                  >
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                    <span className="svg-icon svg-icon-2">
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </div>
                                  {/*end::Advanced search toggle*/}
                                </div>
                                {/*end::Toolbar*/}
                              </div>
                              {/*end::Heading*/}
                              {/*begin::Items*/}
                              <div className="scroll-y mh-200px mh-lg-325px">
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-5">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/electronics/elc004.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M15 17H9V20H15V17Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <a
                                      href="#"
                                      className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      BoomApp by Keenthemes
                                    </a>
                                    <span className="fs-7 text-muted fw-semibold">
                                      #45789
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-5">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <a
                                      href="#"
                                      className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      "Kept API Project Meeting
                                    </a>
                                    <span className="fs-7 text-muted fw-semibold">
                                      #84050
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-5">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <a
                                      href="#"
                                      className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      "KPI Monitoring App Launch
                                    </a>
                                    <span className="fs-7 text-muted fw-semibold">
                                      #84250
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-5">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M20 8L12.5 5L5 14V19H20V8Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <a
                                      href="#"
                                      className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Project Reference FAQ
                                    </a>
                                    <span className="fs-7 text-muted fw-semibold">
                                      #67945
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-5">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <a
                                      href="#"
                                      className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      "FitPro App Development
                                    </a>
                                    <span className="fs-7 text-muted fw-semibold">
                                      #84250
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-5">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <a
                                      href="#"
                                      className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Shopix Mobile App
                                    </a>
                                    <span className="fs-7 text-muted fw-semibold">
                                      #45690
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex align-items-center mb-5">
                                  {/*begin::Symbol*/}
                                  <div className="symbol symbol-40px me-4">
                                    <span className="symbol-label bg-light">
                                      {/*begin::Svg Icon | path: icons/duotune/graphs/gra002.svg*/}
                                      <span className="svg-icon svg-icon-2 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M20 8L12.5 5L5 14V19H20V8Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </div>
                                  {/*end::Symbol*/}
                                  {/*begin::Title*/}
                                  <div className="d-flex flex-column">
                                    <a
                                      href="#"
                                      className="fs-6 text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      "Landing UI Design" Launch
                                    </a>
                                    <span className="fs-7 text-muted fw-semibold">
                                      #24005
                                    </span>
                                  </div>
                                  {/*end::Title*/}
                                </div>
                                {/*end::Item*/}
                              </div>
                              {/*end::Items*/}
                            </div>
                            {/*end::Recently viewed*/}
                            {/*begin::Empty*/}
                            <div
                              data-kt-search-element="empty"
                              className="text-center d-none"
                            >
                              {/*begin::Icon*/}
                              <div className="pt-10 pb-10">
                                {/*begin::Svg Icon | path: icons/duotune/files/fil024.svg*/}
                                <span className="svg-icon svg-icon-4x opacity-50">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      opacity="0.3"
                                      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                                      fill="currentColor"
                                    />
                                    <rect
                                      x="13.6993"
                                      y="13.6656"
                                      width="4.42828"
                                      height="1.73089"
                                      rx="0.865447"
                                      transform="rotate(45 13.6993 13.6656)"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              {/*end::Icon*/}
                              {/*begin::Message*/}
                              <div className="pb-15 fw-semibold">
                                <h3 className="text-gray-600 fs-5 mb-2">
                                  No result found
                                </h3>
                                <div className="text-muted fs-7">
                                  Please try again with a different query
                                </div>
                              </div>
                              {/*end::Message*/}
                            </div>
                            {/*end::Empty*/}
                          </div>
                          {/*end::Wrapper*/}
                          {/*begin::Preferences*/}
                          <form
                            data-kt-search-element="advanced-options-form"
                            className="pt-1 d-none"
                          >
                            {/*begin::Heading*/}
                            <h3 className="fw-semibold text-dark mb-7">
                              Advanced Search
                            </h3>
                            {/*end::Heading*/}
                            {/*begin::Input group*/}
                            <div className="mb-5">
                              <input
                                type="text"
                                className="form-control form-control-sm form-control-solid"
                                placeholder="Contains the word"
                                name="query"
                              />
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="mb-5">
                              {/*begin::Radio group*/}
                              <div className="nav-group nav-group-fluid">
                                {/*begin::Option*/}
                                <label>
                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="type"
                                    defaultValue="has"
                                    defaultChecked="checked"
                                  />
                                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                    All
                                  </span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="type"
                                    defaultValue="users"
                                  />
                                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                    Users
                                  </span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="type"
                                    defaultValue="orders"
                                  />
                                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                    Orders
                                  </span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="type"
                                    defaultValue="projects"
                                  />
                                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                    Projects
                                  </span>
                                </label>
                                {/*end::Option*/}
                              </div>
                              {/*end::Radio group*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="mb-5">
                              <input
                                type="text"
                                name="assignedto"
                                className="form-control form-control-sm form-control-solid"
                                placeholder="Assigned to"
                                defaultValue=""
                              />
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="mb-5">
                              <input
                                type="text"
                                name="collaborators"
                                className="form-control form-control-sm form-control-solid"
                                placeholder="Collaborators"
                                defaultValue=""
                              />
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="mb-5">
                              {/*begin::Radio group*/}
                              <div className="nav-group nav-group-fluid">
                                {/*begin::Option*/}
                                <label>
                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="attachment"
                                    defaultValue="has"
                                    defaultChecked="checked"
                                  />
                                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                    Has attachment
                                  </span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="attachment"
                                    defaultValue="any"
                                  />
                                  <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                    Any
                                  </span>
                                </label>
                                {/*end::Option*/}
                              </div>
                              {/*end::Radio group*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="mb-5">
                              <select
                                name="timezone"
                                aria-label="Select a Timezone"
                                data-control="select2"
                                data-placeholder="date_period"
                                className="form-select form-select-sm form-select-solid"
                              >
                                <option value="next">Within the next</option>
                                <option value="last">Within the last</option>
                                <option value="between">Between</option>
                                <option value="on">On</option>
                              </select>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="row mb-8">
                              {/*begin::Col*/}
                              <div className="col-6">
                                <input
                                  type="number"
                                  name="date_number"
                                  className="form-control form-control-sm form-control-solid"
                                  placeholder="Lenght"
                                  defaultValue=""
                                />
                              </div>
                              {/*end::Col*/}
                              {/*begin::Col*/}
                              <div className="col-6">
                                <select
                                  name="date_typer"
                                  aria-label="Select a Timezone"
                                  data-control="select2"
                                  data-placeholder="Period"
                                  className="form-select form-select-sm form-select-solid"
                                >
                                  <option value="days">Days</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                  <option value="years">Years</option>
                                </select>
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div className="d-flex justify-content-end">
                              <button
                                type="reset"
                                className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                data-kt-search-element="advanced-options-form-cancel"
                              >
                                Cancel
                              </button>
                              <a
                                href="../../demo9/dist/pages/search/horizontal.html"
                                className="btn btn-sm fw-bold btn-primary"
                                data-kt-search-element="advanced-options-form-search"
                              >
                                Search
                              </a>
                            </div>
                            {/*end::Actions*/}
                          </form>
                          {/*end::Preferences*/}
                          {/*begin::Preferences*/}
                          <form
                            data-kt-search-element="preferences"
                            className="pt-1 d-none"
                          >
                            {/*begin::Heading*/}
                            <h3 className="fw-semibold text-dark mb-7">
                              Search Preferences
                            </h3>
                            {/*end::Heading*/}
                            {/*begin::Input group*/}
                            <div className="pb-4 border-bottom">
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                  Projects
                                </span>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                />
                              </label>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="py-4 border-bottom">
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                  Targets
                                </span>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                />
                              </label>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="py-4 border-bottom">
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                  Affiliate Programs
                                </span>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue={1}
                                />
                              </label>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="py-4 border-bottom">
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                  Referrals
                                </span>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                />
                              </label>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="py-4 border-bottom">
                              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                  Users
                                </span>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue={1}
                                />
                              </label>
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Actions*/}
                            <div className="d-flex justify-content-end pt-7">
                              <button
                                type="reset"
                                className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                                data-kt-search-element="preferences-dismiss"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="btn btn-sm fw-bold btn-primary"
                              >
                                Save Changes
                              </button>
                            </div>
                            {/*end::Actions*/}
                          </form>
                          {/*end::Preferences*/}
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::Search*/}
                    </div>
                    {/*end::Search*/}
                    {/*begin::Action*/}
                    <div className="d-flex align-items-center py-3 py-lg-0">
                      {/*begin::Item*/}
                      <div className="me-3">
                        <a
                          href="#"
                          className="btn btn-icon btn-custom btn-active-color-primary position-relative"
                          data-kt-menu-trigger="click"
                          data-kt-menu-attach="parent"
                          data-kt-menu-placement="bottom-end"
                        >
                          {/*begin::Svg Icon | path: icons/duotune/general/gen007.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-white">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
                                fill="currentColor"
                              />
                              <path
                                d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                        </a>
                        {/*begin::Menu*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
                          data-kt-menu="true"
                        >
                          {/*begin::Heading*/}
                          <div
                            className="d-flex flex-column bgi-no-repeat rounded-top"
                            style={{
                              backgroundImage:
                                'url("assets/media/misc/menu-header-bg.jpg")'
                            }}
                          >
                            {/*begin::Title*/}
                            <h3 className="text-white fw-semibold px-9 mt-10 mb-6">
                              Notifications
                              <span className="fs-8 opacity-75 ps-3">24 reports</span>
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Tabs*/}
                            <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                              <li className="nav-item">
                                <a
                                  className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_topbar_notifications_1"
                                >
                                  Alerts
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                                  data-bs-toggle="tab"
                                  href="#kt_topbar_notifications_2"
                                >
                                  Updates
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_topbar_notifications_3"
                                >
                                  Logs
                                </a>
                              </li>
                            </ul>
                            {/*end::Tabs*/}
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Tab content*/}
                          <div className="tab-content">
                            {/*begin::Tab panel*/}
                            <div
                              className="tab-pane fade"
                              id="kt_topbar_notifications_1"
                              role="tabpanel"
                            >
                              {/*begin::Items*/}
                              <div className="scroll-y mh-325px my-5 px-8">
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-35px me-4">
                                      <span className="symbol-label bg-light-primary">
                                        {/*begin::Svg Icon | path: icons/duotune/technology/teh008.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              opacity="0.3"
                                              d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Title*/}
                                    <div className="mb-0 me-2">
                                      <a
                                        href="#"
                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                      >
                                        Project Alice
                                      </a>
                                      <div className="text-gray-400 fs-7">
                                        Phase 1 development
                                      </div>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">1 hr</span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-35px me-4">
                                      <span className="symbol-label bg-light-danger">
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-danger">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              opacity="0.3"
                                              x={2}
                                              y={2}
                                              width={20}
                                              height={20}
                                              rx={10}
                                              fill="currentColor"
                                            />
                                            <rect
                                              x={11}
                                              y={14}
                                              width={7}
                                              height={2}
                                              rx={1}
                                              transform="rotate(-90 11 14)"
                                              fill="currentColor"
                                            />
                                            <rect
                                              x={11}
                                              y={17}
                                              width={2}
                                              height={2}
                                              rx={1}
                                              transform="rotate(-90 11 17)"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Title*/}
                                    <div className="mb-0 me-2">
                                      <a
                                        href="#"
                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                      >
                                        HR Confidential
                                      </a>
                                      <div className="text-gray-400 fs-7">
                                        Confidential staff documents
                                      </div>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    2 hrs
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-35px me-4">
                                      <span className="symbol-label bg-light-warning">
                                        {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-warning">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              opacity="0.3"
                                              d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Title*/}
                                    <div className="mb-0 me-2">
                                      <a
                                        href="#"
                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                      >
                                        Company HR
                                      </a>
                                      <div className="text-gray-400 fs-7">
                                        Corporeate staff profiles
                                      </div>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    5 hrs
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-35px me-4">
                                      <span className="symbol-label bg-light-success">
                                        {/*begin::Svg Icon | path: icons/duotune/files/fil023.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-success">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              opacity="0.3"
                                              d="M5 15C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H5.10001C5.00001 8.7 5 8.3 5 8C5 5.2 7.2 3 10 3C11.9 3 13.5 4 14.3 5.5C14.8 5.2 15.4 5 16 5C17.7 5 19 6.3 19 8C19 8.4 18.9 8.7 18.8 9C18.9 9 18.9 9 19 9C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H5ZM5 12.6H13L9.7 9.29999C9.3 8.89999 8.7 8.89999 8.3 9.29999L5 12.6Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              d="M17 17.4V12C17 11.4 16.6 11 16 11C15.4 11 15 11.4 15 12V17.4H17Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M12 17.4H20L16.7 20.7C16.3 21.1 15.7 21.1 15.3 20.7L12 17.4Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              d="M8 12.6V18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18V12.6H8Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Title*/}
                                    <div className="mb-0 me-2">
                                      <a
                                        href="#"
                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                      >
                                        Project Redux
                                      </a>
                                      <div className="text-gray-400 fs-7">
                                        New frontend admin theme
                                      </div>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    2 days
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-35px me-4">
                                      <span className="symbol-label bg-light-primary">
                                        {/*begin::Svg Icon | path: icons/duotune/maps/map001.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              opacity="0.3"
                                              d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Title*/}
                                    <div className="mb-0 me-2">
                                      <a
                                        href="#"
                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                      >
                                        Project Breafing
                                      </a>
                                      <div className="text-gray-400 fs-7">
                                        Product launch status update
                                      </div>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    21 Jan
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-35px me-4">
                                      <span className="symbol-label bg-light-info">
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen006.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-info">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              opacity="0.3"
                                              d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Title*/}
                                    <div className="mb-0 me-2">
                                      <a
                                        href="#"
                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                      >
                                        Banner Assets
                                      </a>
                                      <div className="text-gray-400 fs-7">
                                        Collection of banner images
                                      </div>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    21 Jan
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-35px me-4">
                                      <span className="symbol-label bg-light-warning">
                                        {/*begin::Svg Icon | path: icons/duotune/art/art002.svg*/}
                                        <span className="svg-icon svg-icon-2 svg-icon-warning">
                                          <svg
                                            width={24}
                                            height={25}
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              opacity="0.3"
                                              d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Title*/}
                                    <div className="mb-0 me-2">
                                      <a
                                        href="#"
                                        className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                      >
                                        Icon Assets
                                      </a>
                                      <div className="text-gray-400 fs-7">
                                        Collection of SVG icons
                                      </div>
                                    </div>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    20 March
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                              </div>
                              {/*end::Items*/}
                              {/*begin::View more*/}
                              <div className="py-3 text-center border-top">
                                <a
                                  href="../../demo9/dist/pages/user-profile/activity.html"
                                  className="btn btn-color-gray-600 btn-active-color-primary"
                                >
                                  View All
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                  <span className="svg-icon svg-icon-5">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x={18}
                                        y={13}
                                        width={13}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-180 18 13)"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                              </div>
                              {/*end::View more*/}
                            </div>
                            {/*end::Tab panel*/}
                            {/*begin::Tab panel*/}
                            <div
                              className="tab-pane fade show active"
                              id="kt_topbar_notifications_2"
                              role="tabpanel"
                            >
                              {/*begin::Wrapper*/}
                              <div className="d-flex flex-column px-9">
                                {/*begin::Section*/}
                                <div className="pt-10 pb-0">
                                  {/*begin::Title*/}
                                  <h3 className="text-dark text-center fw-bold">
                                    Get Pro Access
                                  </h3>
                                  {/*end::Title*/}
                                  {/*begin::Text*/}
                                  <div className="text-center text-gray-600 fw-semibold pt-1">
                                    Outlines keep you honest. They stoping you from
                                    amazing poorly about drive
                                  </div>
                                  {/*end::Text*/}
                                  {/*begin::Action*/}
                                  <div className="text-center mt-5 mb-9">
                                    <a
                                      href="#"
                                      className="btn btn-sm btn-primary px-6"
                                      data-bs-toggle="modal"
                                      data-bs-target="#kt_modal_upgrade_plan"
                                    >
                                      Upgrade
                                    </a>
                                  </div>
                                  {/*end::Action*/}
                                </div>
                                {/*end::Section*/}
                                {/*begin::Illustration*/}
                                <div className="text-center px-4">
                                  <img
                                    className="mw-100 mh-200px"
                                    alt="image"
                                    src="assets/media/illustrations/sigma-1/1.png"
                                  />
                                </div>
                                {/*end::Illustration*/}
                              </div>
                              {/*end::Wrapper*/}
                            </div>
                            {/*end::Tab panel*/}
                            {/*begin::Tab panel*/}
                            <div
                              className="tab-pane fade"
                              id="kt_topbar_notifications_3"
                              role="tabpanel"
                            >
                              {/*begin::Items*/}
                              <div className="scroll-y mh-325px my-5 px-8">
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-success me-4">
                                      200 OK
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      New order
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    Just now
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-danger me-4">
                                      500 ERR
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      New customer
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    2 hrs
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-success me-4">
                                      200 OK
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Payment process
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    5 hrs
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-warning me-4">
                                      300 WRN
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Search query
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    2 days
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-success me-4">
                                      200 OK
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      API connection
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    1 week
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-success me-4">
                                      200 OK
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Database restore
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    Mar 5
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-warning me-4">
                                      300 WRN
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      System update
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    May 15
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-warning me-4">
                                      300 WRN
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Server OS update
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    Apr 3
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-warning me-4">
                                      300 WRN
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      API rollback
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    Jun 30
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-danger me-4">
                                      500 ERR
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Refund process
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    Jul 10
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-danger me-4">
                                      500 ERR
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Withdrawal process
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    Sep 10
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <div className="d-flex flex-stack py-4">
                                  {/*begin::Section*/}
                                  <div className="d-flex align-items-center me-2">
                                    {/*begin::Code*/}
                                    <span className="w-70px badge badge-light-danger me-4">
                                      500 ERR
                                    </span>
                                    {/*end::Code*/}
                                    {/*begin::Title*/}
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-semibold"
                                    >
                                      Mail tasks
                                    </a>
                                    {/*end::Title*/}
                                  </div>
                                  {/*end::Section*/}
                                  {/*begin::Label*/}
                                  <span className="badge badge-light fs-8">
                                    Dec 10
                                  </span>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Item*/}
                              </div>
                              {/*end::Items*/}
                              {/*begin::View more*/}
                              <div className="py-3 text-center border-top">
                                <a
                                  href="../../demo9/dist/pages/user-profile/activity.html"
                                  className="btn btn-color-gray-600 btn-active-color-primary"
                                >
                                  View All
                                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                  <span className="svg-icon svg-icon-5">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x={18}
                                        y={13}
                                        width={13}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-180 18 13)"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                              </div>
                              {/*end::View more*/}
                            </div>
                            {/*end::Tab panel*/}
                          </div>
                          {/*end::Tab content*/}
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="me-3">
                        <a
                          href="#"
                          className="btn btn-icon btn-custom btn-active-color-primary"
                          data-kt-menu-trigger="click"
                          data-kt-menu-attach="parent"
                          data-kt-menu-placement="bottom-end"
                        >
                          {/*begin::Svg Icon | path: icons/duotune/communication/com013.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-white">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                                fill="currentColor"
                              />
                              <rect
                                opacity="0.3"
                                x={8}
                                y={3}
                                width={8}
                                height={8}
                                rx={4}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </a>
                        {/*begin::User account menu*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                          data-kt-menu="true"
                        >
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <div className="menu-content d-flex align-items-center px-3">
                              {/*begin::Avatar*/}
                              <div className="symbol symbol-50px me-5">
                                <img
                                  alt="Logo"
                                  src="assets/media/avatars/300-1.jpg"
                                />
                              </div>
                              {/*end::Avatar*/}
                              {/*begin::Username*/}
                              <div className="d-flex flex-column">
                                <div className="fw-bold d-flex align-items-center fs-5">
                                  Max Smith
                                  <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                                    Pro
                                  </span>
                                </div>
                                <a
                                  href="#"
                                  className="fw-semibold text-muted text-hover-primary fs-7"
                                >
                                  max@kt.com
                                </a>
                              </div>
                              {/*end::Username*/}
                            </div>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu separator*/}
                          <div className="separator my-2" />
                          {/*end::Menu separator*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a
                              href="../../demo9/dist/account/overview.html"
                              className="menu-link px-5"
                            >
                              My Profile
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a
                              href="../../demo9/dist/apps/projects/list.html"
                              className="menu-link px-5"
                            >
                              <span className="menu-text">My Projects</span>
                              <span className="menu-badge">
                                <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                                  3
                                </span>
                              </span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div
                            className="menu-item px-5"
                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            data-kt-menu-offset="-15px, 0"
                          >
                            <a href="#" className="menu-link px-5">
                              <span className="menu-title">My Subscription</span>
                              <span className="menu-arrow" />
                            </a>
                            {/*begin::Menu sub*/}
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/referrals.html"
                                  className="menu-link px-5"
                                >
                                  Referrals
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/billing.html"
                                  className="menu-link px-5"
                                >
                                  Billing
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/statements.html"
                                  className="menu-link px-5"
                                >
                                  Payments
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/statements.html"
                                  className="menu-link d-flex flex-stack px-5"
                                >
                                  Statements
                                  <i
                                    className="fas fa-exclamation-circle ms-2 fs-7"
                                    data-bs-toggle="tooltip"
                                    title="View your statements"
                                  />
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu separator*/}
                              <div className="separator my-2" />
                              {/*end::Menu separator*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <div className="menu-content px-3">
                                  <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input w-30px h-20px"
                                      type="checkbox"
                                      defaultValue={1}
                                      defaultChecked="checked"
                                      name="notifications"
                                    />
                                    <span className="form-check-label text-muted fs-7">
                                      Notifications
                                    </span>
                                  </label>
                                </div>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu sub*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a
                              href="../../demo9/dist/account/statements.html"
                              className="menu-link px-5"
                            >
                              My Statements
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu separator*/}
                          <div className="separator my-2" />
                          {/*end::Menu separator*/}
                          {/*begin::Menu item*/}
                          <div
                            className="menu-item px-5"
                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                            data-kt-menu-placement="right-start"
                            data-kt-menu-offset="-15px, 0"
                          >
                            <a href="#" className="menu-link px-5">
                              <span className="menu-title position-relative">
                                Language
                                <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                  English
                                  <img
                                    className="w-15px h-15px rounded-1 ms-2"
                                    src="assets/media/flags/united-states.svg"
                                    alt=""
                                  />
                                </span>
                              </span>
                            </a>
                            {/*begin::Menu sub*/}
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/settings.html"
                                  className="menu-link d-flex px-5 active"
                                >
                                  <span className="symbol symbol-20px me-4">
                                    <img
                                      className="rounded-1"
                                      src="assets/media/flags/united-states.svg"
                                      alt=""
                                    />
                                  </span>
                                  English
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/settings.html"
                                  className="menu-link d-flex px-5"
                                >
                                  <span className="symbol symbol-20px me-4">
                                    <img
                                      className="rounded-1"
                                      src="assets/media/flags/spain.svg"
                                      alt=""
                                    />
                                  </span>
                                  Spanish
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/settings.html"
                                  className="menu-link d-flex px-5"
                                >
                                  <span className="symbol symbol-20px me-4">
                                    <img
                                      className="rounded-1"
                                      src="assets/media/flags/germany.svg"
                                      alt=""
                                    />
                                  </span>
                                  German
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/settings.html"
                                  className="menu-link d-flex px-5"
                                >
                                  <span className="symbol symbol-20px me-4">
                                    <img
                                      className="rounded-1"
                                      src="assets/media/flags/japan.svg"
                                      alt=""
                                    />
                                  </span>
                                  Japanese
                                </a>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className="menu-item px-3">
                                <a
                                  href="../../demo9/dist/account/settings.html"
                                  className="menu-link d-flex px-5"
                                >
                                  <span className="symbol symbol-20px me-4">
                                    <img
                                      className="rounded-1"
                                      src="assets/media/flags/france.svg"
                                      alt=""
                                    />
                                  </span>
                                  French
                                </a>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu sub*/}
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5 my-1">
                            <a
                              href="../../demo9/dist/account/settings.html"
                              className="menu-link px-5"
                            >
                              Account Settings
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-5">
                            <a
                              href="../../demo9/dist/authentication/layouts/corporate/sign-in.html"
                              className="menu-link px-5"
                            >
                              Sign Out
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::User account menu*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Theme mode*/}
                      <div className="d-flex align-items-center me-3">
                        {/*begin::Menu toggle*/}
                        <a
                          href="#"
                          className="btn btn-icon btn-custom btn-active-color-primary"
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-attach="parent"
                          data-kt-menu-placement="bottom-end"
                        >
                          {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                          <span className="svg-icon theme-light-show svg-icon-2">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                                fill="currentColor"
                              />
                              <path
                                d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                                fill="currentColor"
                              />
                              <path
                                d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                                fill="currentColor"
                              />
                              <path
                                d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                                fill="currentColor"
                              />
                              <path
                                d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                                fill="currentColor"
                              />
                              <path
                                d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                                fill="currentColor"
                              />
                              <path
                                d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                                fill="currentColor"
                              />
                              <path
                                d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                          <span className="svg-icon theme-dark-show svg-icon-2">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                                fill="currentColor"
                              />
                              <path
                                d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                                fill="currentColor"
                              />
                              <path
                                d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                                fill="currentColor"
                              />
                              <path
                                d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </a>
                        {/*begin::Menu toggle*/}
                        {/*begin::Menu*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                          data-kt-menu="true"
                          data-kt-element="theme-mode-menu"
                        >
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-0">
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="mode"
                              data-kt-value="light"
                            >
                              <span className="menu-icon" data-kt-element="icon">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen060.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title">Light</span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-0">
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="mode"
                              data-kt-value="dark"
                            >
                              <span className="menu-icon" data-kt-element="icon">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen061.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title">Dark</span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-0">
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="mode"
                              data-kt-value="system"
                            >
                              <span className="menu-icon" data-kt-element="icon">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen062.svg*/}
                                <span className="svg-icon svg-icon-3">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                              <span className="menu-title">System</span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::Theme mode*/}
                      {/*begin::Item*/}
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_create_app"
                      >
                        New Goal
                      </a>
                      {/*end::Item*/}
                    </div>
                    {/*end::Action*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Container*/}
                <div className="header-offset" />
              </div>
              {/*end::Header*/}
              {/*begin::Content*/}
              <div
                className="content d-flex flex-column flex-column-fluid"
                id="kt_content"
              >
                {/*begin::Container*/}
                <div className="container-xxl" id="kt_content_container">
                  {/*begin::About card*/}
                  <div className="card">
                    {/*begin::Body*/}
                    <div className="card-body p-lg-17">
                      {/*begin::About*/}
                      <div className="mb-18">
                        {/*begin::Wrapper*/}
                        <div className="mb-10">
                          {/*begin::Top*/}
                          <div className="text-center mb-15">
                            {/*begin::Title*/}
                            <h3 className="fs-2hx text-dark mb-5">About Us</h3>
                            {/*end::Title*/}
                            {/*begin::Text*/}
                            <div className="fs-5 text-muted fw-semibold">
                              Within the last 10 years, we have sold over 100,000
                              admin theme copies that have been
                              <br />
                              successfully deployed by small businesses to global
                              enterprises
                            </div>
                            {/*end::Text*/}
                          </div>
                          {/*end::Top*/}
                          {/*begin::Overlay*/}
                          <div className="overlay">
                            {/*begin::Image*/}
                            <img
                              className="w-100 card-rounded"
                              src="assets/media/stock/1600x800/img-1.jpg"
                              alt=""
                            />
                            {/*end::Image*/}
                            {/*begin::Links*/}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                              <a
                                href="../../demo9/dist/pages/pricing/pricing-2.html"
                                className="btn btn-primary"
                              >
                                Pricing
                              </a>
                              <a
                                href="../../demo9/dist/pages/careers/apply.html"
                                className="btn btn-light-primary ms-3"
                              >
                                Join Us
                              </a>
                            </div>
                            {/*end::Links*/}
                          </div>
                          {/*end::Container*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Description*/}
                        <div className="fs-5 fw-semibold text-gray-600">
                          {/*begin::Text*/}
                          <p className="mb-8">
                            First, a disclaimer – the entire process of writing a blog
                            post often takes more than a couple of hours, even if you
                            can type eighty words per minute and your writing skills
                            are sharp. From the seed of the idea to finally hitting
                            “Publish,” you might spend several days or maybe even a
                            week “writing” a blog post, but it’s important to spend
                            those vital hours planning your post and even thinking
                            about
                            <a
                              href="../../demo9/dist/pages/blog/post.html"
                              className="link-primary pe-1"
                            >
                              Your Post
                            </a>
                            (yes, thinking counts as working if you’re a blogger)
                            before you actually write it.
                          </p>
                          {/*end::Text*/}
                          {/*begin::Text*/}
                          <p className="mb-8">
                            There’s an old maxim that states,
                            <span className="text-gray-800 pe-1">
                              “No fun for the writer, no fun for the reader.”
                            </span>
                            No matter what industry you’re working in, as a blogger,
                            you should live and die by this statement.
                          </p>
                          {/*end::Text*/}
                          {/*begin::Text*/}
                          <p className="mb-8">
                            Before you do any of the following steps, be sure to pick
                            a topic that actually interests you. Nothing – and
                            <a
                              href="../../demo9/dist/pages/blog/home.html"
                              className="link-primary pe-1"
                            >
                              I mean NOTHING
                            </a>
                            – will kill a blog post more effectively than a lack of
                            enthusiasm from the writer. You can tell when a writer is
                            bored by their subject, and it’s so cringe-worthy it’s a
                            little embarrassing.
                          </p>
                          {/*end::Text*/}
                          {/*begin::Text*/}
                          <p className="mb-17">
                            I can hear your objections already. “But Dan, I have to
                            blog for a cardboard box manufacturing company.” I feel
                            your pain, I really do. During the course of my career,
                            I’ve written content for dozens of clients in some
                            less-than-thrilling industries (such as financial
                            regulatory compliance and corporate housing), but the
                            hallmark of a professional blogger is the ability to write
                            well about any topic, no matter how dry it may be.
                            Blogging is a lot easier, however, if you can muster at
                            least a little enthusiasm for the topic at hand.
                          </p>
                          {/*end::Text*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::About*/}
                      {/*begin::Statistics*/}
                      <div className="card bg-light mb-18">
                        {/*begin::Body*/}
                        <div className="card-body py-15">
                          {/*begin::Wrapper*/}
                          <div className="d-flex flex-center">
                            {/*begin::Items*/}
                            <div className="d-flex flex-center flex-wrap mb-10 mx-auto gap-5 w-xl-900px">
                              {/*begin::Item*/}
                              <div className="octagon d-flex flex-center h-200px w-200px bg-body mx-lg-10">
                                {/*begin::Content*/}
                                <div className="text-center">
                                  {/*begin::Symbol*/}
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                  <span className="svg-icon svg-icon-2tx svg-icon-primary">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x={2}
                                        y={2}
                                        width={9}
                                        height={9}
                                        rx={2}
                                        fill="currentColor"
                                      />
                                      <rect
                                        opacity="0.3"
                                        x={13}
                                        y={2}
                                        width={9}
                                        height={9}
                                        rx={2}
                                        fill="currentColor"
                                      />
                                      <rect
                                        opacity="0.3"
                                        x={13}
                                        y={13}
                                        width={9}
                                        height={9}
                                        rx={2}
                                        fill="currentColor"
                                      />
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={13}
                                        width={9}
                                        height={9}
                                        rx={2}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  {/*end::Symbol*/}
                                  {/*begin::Text*/}
                                  <div className="mt-1">
                                    {/*begin::Animation*/}
                                    <div className="fs-lg-2hx fs-2x fw-bold text-gray-800 d-flex align-items-center">
                                      <div
                                        className="min-w-70px"
                                        data-kt-countup="true"
                                        data-kt-countup-value={700}
                                      >
                                        0
                                      </div>
                                      +
                                    </div>
                                    {/*end::Animation*/}
                                    {/*begin::Label*/}
                                    <span className="text-gray-600 fw-semibold fs-5 lh-0">
                                      Businesses
                                    </span>
                                    {/*end::Label*/}
                                  </div>
                                  {/*end::Text*/}
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="octagon d-flex flex-center h-200px w-200px bg-body mx-lg-10">
                                {/*begin::Content*/}
                                <div className="text-center">
                                  {/*begin::Symbol*/}
                                  {/*begin::Svg Icon | path: icons/duotune/graphs/gra008.svg*/}
                                  <span className="svg-icon svg-icon-2tx svg-icon-success">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  {/*end::Symbol*/}
                                  {/*begin::Text*/}
                                  <div className="mt-1">
                                    {/*begin::Animation*/}
                                    <div className="fs-lg-2hx fs-2x fw-bold text-gray-800 d-flex align-items-center">
                                      <div
                                        className="min-w-50px"
                                        data-kt-countup="true"
                                        data-kt-countup-value={80}
                                      >
                                        0
                                      </div>
                                      K+
                                    </div>
                                    {/*end::Animation*/}
                                    {/*begin::Label*/}
                                    <span className="text-gray-600 fw-semibold fs-5 lh-0">
                                      Quick Reports
                                    </span>
                                    {/*end::Label*/}
                                  </div>
                                  {/*end::Text*/}
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <div className="octagon d-flex flex-center h-200px w-200px bg-body mx-lg-10">
                                {/*begin::Content*/}
                                <div className="text-center">
                                  {/*begin::Symbol*/}
                                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                  <span className="svg-icon svg-icon-2tx svg-icon-info">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  {/*end::Symbol*/}
                                  {/*begin::Text*/}
                                  <div className="mt-1">
                                    {/*begin::Animation*/}
                                    <div className="fs-lg-2hx fs-2x fw-bold text-gray-800 d-flex align-items-center">
                                      <div
                                        className="min-w-50px"
                                        data-kt-countup="true"
                                        data-kt-countup-value={35}
                                      >
                                        0
                                      </div>
                                      M+
                                    </div>
                                    {/*end::Animation*/}
                                    {/*begin::Label*/}
                                    <span className="text-gray-600 fw-semibold fs-5 lh-0">
                                      Payments
                                    </span>
                                    {/*end::Label*/}
                                  </div>
                                  {/*end::Text*/}
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Items*/}
                          </div>
                          {/*end::Wrapper*/}
                          {/*begin::Testimonial*/}
                          <div className="fs-2 fw-semibold text-muted text-center mb-3">
                            <span className="fs-1 lh-1 text-gray-700">“</span>When you
                            care about your topic, you’ll write about it in a
                            <br />
                            <span className="text-gray-700 me-1">more powerful</span>,
                            emotionally expressive way
                            <span className="fs-1 lh-1 text-gray-700">“</span>
                          </div>
                          {/*end::Testimonial*/}
                          {/*begin::Author*/}
                          <div className="fs-2 fw-semibold text-muted text-center">
                            <a
                              href="../../demo9/dist/account/security.html"
                              className="link-primary fs-4 fw-bold"
                            >
                              Marcus Levy
                            </a>
                            <span className="fs-4 fw-bold text-gray-600">
                              ,KeenThemes CEO
                            </span>
                          </div>
                          {/*end::Author*/}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Statistics*/}
                      {/*begin::Section*/}
                      <div className="mb-16">
                        {/*begin::Top*/}
                        <div className="text-center mb-12">
                          {/*begin::Title*/}
                          <h3 className="fs-2hx text-dark mb-5">Publications</h3>
                          {/*end::Title*/}
                          {/*begin::Text*/}
                          <div className="fs-5 text-muted fw-semibold">
                            Our goal is to provide a complete and robust theme
                            solution
                            <br />
                            to boost all of our customer’s project deployments
                          </div>
                          {/*end::Text*/}
                        </div>
                        {/*end::Top*/}
                        {/*begin::Row*/}
                        <div className="row g-10">
                          {/*begin::Col*/}
                          <div className="col-md-4">
                            {/*begin::Publications post*/}
                            <div className="card-xl-stretch me-md-6">
                              {/*begin::Overlay*/}
                              <a
                                className="d-block overlay mb-4"
                                data-fslightbox="lightbox-hot-sales"
                                href="assets/media/stock/600x400/img-73.jpg"
                              >
                                {/*begin::Image*/}
                                <div
                                  className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                                  style={{
                                    backgroundImage:
                                      'url("assets/media/stock/600x400/img-73.jpg")'
                                  }}
                                />
                                {/*end::Image*/}
                                {/*begin::Action*/}
                                <div className="overlay-layer bg-dark card-rounded bg-opacity-25">
                                  <i className="bi bi-eye-fill fs-2x text-white" />
                                </div>
                                {/*end::Action*/}
                              </a>
                              {/*end::Overlay*/}
                              {/*begin::Body*/}
                              <div className="m-0">
                                {/*begin::Title*/}
                                <a
                                  href="../../demo9/dist/pages/user-profile/overview.html"
                                  className="fs-4 text-dark fw-bold text-hover-primary text-dark lh-base"
                                >
                                  Admin Panel - How To Started the Dashboard Tutorial
                                </a>
                                {/*end::Title*/}
                                {/*begin::Text*/}
                                <div className="fw-semibold fs-5 text-gray-600 text-dark mt-3 mb-5">
                                  We’ve been focused on making a the from also not
                                  been afraid to and step away been focused create eye
                                </div>
                                {/*end::Text*/}
                                {/*begin::Content*/}
                                <div className="fs-6 fw-bold">
                                  {/*begin::Author*/}
                                  <a
                                    href="../../demo9/dist/apps/projects/users.html"
                                    className="text-gray-700 text-hover-primary"
                                  >
                                    Jane Miller
                                  </a>
                                  {/*end::Author*/}
                                  {/*begin::Date*/}
                                  <span className="text-muted">on Mar 21 2021</span>
                                  {/*end::Date*/}
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end::Publications post*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-md-4">
                            {/*begin::Publications post*/}
                            <div className="card-xl-stretch mx-md-3">
                              {/*begin::Overlay*/}
                              <a
                                className="d-block overlay mb-4"
                                data-fslightbox="lightbox-hot-sales"
                                href="assets/media/stock/600x400/img-74.jpg"
                              >
                                {/*begin::Image*/}
                                <div
                                  className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                                  style={{
                                    backgroundImage:
                                      'url("assets/media/stock/600x400/img-74.jpg")'
                                  }}
                                />
                                {/*end::Image*/}
                                {/*begin::Action*/}
                                <div className="overlay-layer bg-dark card-rounded bg-opacity-25">
                                  <i className="bi bi-eye-fill fs-2x text-white" />
                                </div>
                                {/*end::Action*/}
                              </a>
                              {/*end::Overlay*/}
                              {/*begin::Body*/}
                              <div className="m-0">
                                {/*begin::Title*/}
                                <a
                                  href="../../demo9/dist/pages/user-profile/overview.html"
                                  className="fs-4 text-dark fw-bold text-hover-primary text-dark lh-base"
                                >
                                  Admin Panel - How To Started the Dashboard Tutorial
                                </a>
                                {/*end::Title*/}
                                {/*begin::Text*/}
                                <div className="fw-semibold fs-5 text-gray-600 text-dark mt-3 mb-5">
                                  We’ve been focused on making the from v4 to v5 but
                                  we have also not been afraid to step away been
                                  focused
                                </div>
                                {/*end::Text*/}
                                {/*begin::Content*/}
                                <div className="fs-6 fw-bold">
                                  {/*begin::Author*/}
                                  <a
                                    href="../../demo9/dist/apps/projects/users.html"
                                    className="text-gray-700 text-hover-primary"
                                  >
                                    Cris Morgan
                                  </a>
                                  {/*end::Author*/}
                                  {/*begin::Date*/}
                                  <span className="text-muted">on Apr 14 2021</span>
                                  {/*end::Date*/}
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end::Publications post*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-md-4">
                            {/*begin::Publications post*/}
                            <div className="card-xl-stretch ms-md-6">
                              {/*begin::Overlay*/}
                              <a
                                className="d-block overlay mb-4"
                                data-fslightbox="lightbox-hot-sales"
                                href="assets/media/stock/600x400/img-47.jpg"
                              >
                                {/*begin::Image*/}
                                <div
                                  className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                                  style={{
                                    backgroundImage:
                                      'url("assets/media/stock/600x400/img-47.jpg")'
                                  }}
                                />
                                {/*end::Image*/}
                                {/*begin::Action*/}
                                <div className="overlay-layer bg-dark card-rounded bg-opacity-25">
                                  <i className="bi bi-eye-fill fs-2x text-white" />
                                </div>
                                {/*end::Action*/}
                              </a>
                              {/*end::Overlay*/}
                              {/*begin::Body*/}
                              <div className="m-0">
                                {/*begin::Title*/}
                                <a
                                  href="../../demo9/dist/pages/user-profile/overview.html"
                                  className="fs-4 text-dark fw-bold text-hover-primary text-dark lh-base"
                                >
                                  Admin Panel - How To Started the Dashboard Tutorial
                                </a>
                                {/*end::Title*/}
                                {/*begin::Text*/}
                                <div className="fw-semibold fs-5 text-gray-600 text-dark mt-3 mb-5">
                                  We’ve been focused on making the from v4 to v5 but
                                  we’ve also not been afraid to step away been focused
                                </div>
                                {/*end::Text*/}
                                {/*begin::Content*/}
                                <div className="fs-6 fw-bold">
                                  {/*begin::Author*/}
                                  <a
                                    href="../../demo9/dist/apps/projects/users.html"
                                    className="text-gray-700 text-hover-primary"
                                  >
                                    Carles Nilson
                                  </a>
                                  {/*end::Author*/}
                                  {/*begin::Date*/}
                                  <span className="text-muted">on May 14 2021</span>
                                  {/*end::Date*/}
                                </div>
                                {/*end::Content*/}
                              </div>
                              {/*end::Body*/}
                            </div>
                            {/*end::Publications post*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Team*/}
                      <div className="mb-18">
                        {/*begin::Heading*/}
                        <div className="text-center mb-12">
                          {/*begin::Title*/}
                          <h3 className="fs-2hx text-dark mb-5">Our Great Team</h3>
                          {/*end::Title*/}
                          {/*begin::Sub-title*/}
                          <div className="fs-5 text-muted fw-semibold">
                            It’s no doubt that when a development takes longer to
                            complete, additional costs to
                            <br />
                            integrate and test each extra feature creeps up and haunts
                            most of us.
                          </div>
                          {/*end::Sub-title=*/}
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Slider*/}
                        <div className="tns tns-default mb-10">
                          {/*begin::Wrapper*/}
                          <div
                            data-tns="true"
                            data-tns-loop="true"
                            data-tns-swipe-angle="false"
                            data-tns-speed={2000}
                            data-tns-autoplay="true"
                            data-tns-autoplay-timeout={18000}
                            data-tns-controls="true"
                            data-tns-nav="false"
                            data-tns-items={1}
                            data-tns-center="false"
                            data-tns-dots="false"
                            data-tns-prev-button="#kt_team_slider_prev"
                            data-tns-next-button="#kt_team_slider_next"
                            data-tns-responsive="{1200: {items: 3}, 992: {items: 2}}"
                          >
                            {/*begin::Item*/}
                            <div className="text-center">
                              {/*begin::Photo*/}
                              <div
                                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/avatars/300-1.jpg")'
                                }}
                              />
                              {/*end::Photo*/}
                              {/*begin::Person*/}
                              <div className="mb-0">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="text-dark fw-bold text-hover-primary fs-3"
                                >
                                  Paul Miles
                                </a>
                                {/*end::Name*/}
                                {/*begin::Position*/}
                                <div className="text-muted fs-6 fw-semibold mt-1">
                                  Development Lead
                                </div>
                                {/*begin::Position*/}
                              </div>
                              {/*end::Person*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="text-center">
                              {/*begin::Photo*/}
                              <div
                                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/avatars/300-2.jpg")'
                                }}
                              />
                              {/*end::Photo*/}
                              {/*begin::Person*/}
                              <div className="mb-0">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="text-dark fw-bold text-hover-primary fs-3"
                                >
                                  Melisa Marcus
                                </a>
                                {/*end::Name*/}
                                {/*begin::Position*/}
                                <div className="text-muted fs-6 fw-semibold mt-1">
                                  Creative Director
                                </div>
                                {/*begin::Position*/}
                              </div>
                              {/*end::Person*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="text-center">
                              {/*begin::Photo*/}
                              <div
                                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/avatars/300-5.jpg")'
                                }}
                              />
                              {/*end::Photo*/}
                              {/*begin::Person*/}
                              <div className="mb-0">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="text-dark fw-bold text-hover-primary fs-3"
                                >
                                  David Nilson
                                </a>
                                {/*end::Name*/}
                                {/*begin::Position*/}
                                <div className="text-muted fs-6 fw-semibold mt-1">
                                  Python Expert
                                </div>
                                {/*begin::Position*/}
                              </div>
                              {/*end::Person*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="text-center">
                              {/*begin::Photo*/}
                              <div
                                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/avatars/300-20.jpg")'
                                }}
                              />
                              {/*end::Photo*/}
                              {/*begin::Person*/}
                              <div className="mb-0">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="text-dark fw-bold text-hover-primary fs-3"
                                >
                                  Anne Clarc
                                </a>
                                {/*end::Name*/}
                                {/*begin::Position*/}
                                <div className="text-muted fs-6 fw-semibold mt-1">
                                  Project Manager
                                </div>
                                {/*begin::Position*/}
                              </div>
                              {/*end::Person*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="text-center">
                              {/*begin::Photo*/}
                              <div
                                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/avatars/300-23.jpg")'
                                }}
                              />
                              {/*end::Photo*/}
                              {/*begin::Person*/}
                              <div className="mb-0">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="text-dark fw-bold text-hover-primary fs-3"
                                >
                                  Ricky Hunt
                                </a>
                                {/*end::Name*/}
                                {/*begin::Position*/}
                                <div className="text-muted fs-6 fw-semibold mt-1">
                                  Art Director
                                </div>
                                {/*begin::Position*/}
                              </div>
                              {/*end::Person*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="text-center">
                              {/*begin::Photo*/}
                              <div
                                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/avatars/300-12.jpg")'
                                }}
                              />
                              {/*end::Photo*/}
                              {/*begin::Person*/}
                              <div className="mb-0">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="text-dark fw-bold text-hover-primary fs-3"
                                >
                                  Alice Wayde
                                </a>
                                {/*end::Name*/}
                                {/*begin::Position*/}
                                <div className="text-muted fs-6 fw-semibold mt-1">
                                  Marketing Manager
                                </div>
                                {/*begin::Position*/}
                              </div>
                              {/*end::Person*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="text-center">
                              {/*begin::Photo*/}
                              <div
                                className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/avatars/300-9.jpg")'
                                }}
                              />
                              {/*end::Photo*/}
                              {/*begin::Person*/}
                              <div className="mb-0">
                                {/*begin::Name*/}
                                <a
                                  href="#"
                                  className="text-dark fw-bold text-hover-primary fs-3"
                                >
                                  Carles Puyol
                                </a>
                                {/*end::Name*/}
                                {/*begin::Position*/}
                                <div className="text-muted fs-6 fw-semibold mt-1">
                                  QA Managers
                                </div>
                                {/*begin::Position*/}
                              </div>
                              {/*end::Person*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                          {/*end::Wrapper*/}
                          {/*begin::Button*/}
                          <button
                            className="btn btn-icon btn-active-color-primary"
                            id="kt_team_slider_prev"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr074.svg*/}
                            <span className="svg-icon svg-icon-3x">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*end::Button*/}
                          {/*begin::Button*/}
                          <button
                            className="btn btn-icon btn-active-color-primary"
                            id="kt_team_slider_next"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                            <span className="svg-icon svg-icon-3x">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*end::Button*/}
                        </div>
                        {/*end::Slider*/}
                      </div>
                      {/*end::Team*/}
                      {/*begin::Card*/}
                      <div className="card mb-4 bg-light text-center">
                        {/*begin::Body*/}
                        <div className="card-body py-12">
                          {/*begin::Icon*/}
                          <a href="#" className="mx-4">
                            <img
                              src="assets/media/svg/brand-logos/facebook-4.svg"
                              className="h-30px my-2"
                              alt=""
                            />
                          </a>
                          {/*end::Icon*/}
                          {/*begin::Icon*/}
                          <a href="#" className="mx-4">
                            <img
                              src="assets/media/svg/brand-logos/instagram-2-1.svg"
                              className="h-30px my-2"
                              alt=""
                            />
                          </a>
                          {/*end::Icon*/}
                          {/*begin::Icon*/}
                          <a href="#" className="mx-4">
                            <img
                              src="assets/media/svg/brand-logos/github.svg"
                              className="h-30px my-2"
                              alt=""
                            />
                          </a>
                          {/*end::Icon*/}
                          {/*begin::Icon*/}
                          <a href="#" className="mx-4">
                            <img
                              src="assets/media/svg/brand-logos/behance.svg"
                              className="h-30px my-2"
                              alt=""
                            />
                          </a>
                          {/*end::Icon*/}
                          {/*begin::Icon*/}
                          <a href="#" className="mx-4">
                            <img
                              src="assets/media/svg/brand-logos/pinterest-p.svg"
                              className="h-30px my-2"
                              alt=""
                            />
                          </a>
                          {/*end::Icon*/}
                          {/*begin::Icon*/}
                          <a href="#" className="mx-4">
                            <img
                              src="assets/media/svg/brand-logos/twitter.svg"
                              className="h-30px my-2"
                              alt=""
                            />
                          </a>
                          {/*end::Icon*/}
                          {/*begin::Icon*/}
                          <a href="#" className="mx-4">
                            <img
                              src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                              className="h-30px my-2"
                              alt=""
                            />
                          </a>
                          {/*end::Icon*/}
                        </div>
                        {/*end::Body*/}
                      </div>
                      {/*end::Card*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::About card*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Content*/}
              {/*begin::Footer*/}
              <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                {/*begin::Container*/}
                <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
                  {/*begin::Copyright*/}
                  <div className="text-dark order-2 order-md-1">
                    <span className="text-gray-400 fw-semibold me-1">Created by</span>
                    <a
                      href="https://keenthemes.com"
                      target="_blank"
                      className="text-muted text-hover-primary fw-semibold me-2 fs-6"
                    >
                      Keenthemes
                    </a>
                  </div>
                  {/*end::Copyright*/}
                  {/*begin::Menu*/}
                  <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                      <a
                        href="https://keenthemes.com"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://devs.keenthemes.com"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Support
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="https://1.envato.market/EA4JP"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Purchase
                      </a>
                    </li>
                  </ul>
                  {/*end::Menu*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Footer*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        {/*end::Root*/}
        {/*begin::Drawers*/}
        {/*begin::Activities drawer*/}
        <div
          id="kt_activities"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="activities"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_activities_toggle"
          data-kt-drawer-close="#kt_activities_close"
        >
          <div className="card shadow-none border-0 rounded-0">
            {/*begin::Header*/}
            <div className="card-header" id="kt_activities_header">
              <h3 className="card-title fw-bold text-dark">Activity Logs</h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-active-light-primary me-n5"
                  id="kt_activities_close"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body position-relative" id="kt_activities_body">
              {/*begin::Content*/}
              <div
                id="kt_activities_scroll"
                className="position-relative scroll-y me-n5 pe-5"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_activities_body"
                data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
                data-kt-scroll-offset="5px"
              >
                {/*begin::Timeline items*/}
                <div className="timeline">
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com003.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                              fill="currentColor"
                            />
                            <path
                              d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          There are 2 new tasks for you in “AirPlus Mobile App”
                          project:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Added at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Nina Nilson"
                          >
                            <img src="assets/media/avatars/300-14.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        {/*begin::Record*/}
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                          {/*begin::Title*/}
                          <a
                            href="../../demo9/dist/apps/projects/project.html"
                            className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Meeting with customer
                          </a>
                          {/*end::Title*/}
                          {/*begin::Label*/}
                          <div className="min-w-175px pe-2">
                            <span className="badge badge-light text-muted">
                              Application Design
                            </span>
                          </div>
                          {/*end::Label*/}
                          {/*begin::Users*/}
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img src="assets/media/avatars/300-2.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img src="assets/media/avatars/300-14.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                                A
                              </div>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Users*/}
                          {/*begin::Progress*/}
                          <div className="min-w-125px pe-2">
                            <span className="badge badge-light-primary">
                              In Progress
                            </span>
                          </div>
                          {/*end::Progress*/}
                          {/*begin::Action*/}
                          <a
                            href="../../demo9/dist/apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Record*/}
                        {/*begin::Record*/}
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                          {/*begin::Title*/}
                          <a
                            href="../../demo9/dist/apps/projects/project.html"
                            className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Project Delivery Preparation
                          </a>
                          {/*end::Title*/}
                          {/*begin::Label*/}
                          <div className="min-w-175px">
                            <span className="badge badge-light text-muted">
                              CRM System Development
                            </span>
                          </div>
                          {/*end::Label*/}
                          {/*begin::Users*/}
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img src="assets/media/avatars/300-20.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                                B
                              </div>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Users*/}
                          {/*begin::Progress*/}
                          <div className="min-w-125px">
                            <span className="badge badge-light-success">
                              Completed
                            </span>
                          </div>
                          {/*end::Progress*/}
                          {/*begin::Action*/}
                          <a
                            href="../../demo9/dist/apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Record*/}
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                              fill="currentColor"
                            />
                            <path
                              d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n2">
                      {/*begin::Timeline heading*/}
                      <div className="overflow-auto pe-3">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          Invitation for crafting engaging designs that speak human
                          workshop
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Sent at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Alan Nilson"
                          >
                            <img src="assets/media/avatars/300-1.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="mb-5 pe-3">
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                        >
                          3 New Incoming Project Files:
                        </a>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Sent at 10:30 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Jan Hummer"
                          >
                            <img src="assets/media/avatars/300-23.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                          {/*begin::Item*/}
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            {/*begin::Icon*/}
                            <img
                              alt=""
                              className="w-30px me-3"
                              src="assets/media/svg/files/pdf.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a
                                href="../../demo9/dist/apps/projects/project.html"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Finance KPI App Guidelines
                              </a>
                              {/*end::Desc*/}
                              {/*begin::Number*/}
                              <div className="text-gray-400">1.9mb</div>
                              {/*end::Number*/}
                            </div>
                            {/*begin::Info*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            {/*begin::Icon*/}
                            <img
                              alt="../../demo9/dist/apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/media/svg/files/doc.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a href="#" className="fs-6 text-hover-primary fw-bold">
                                Client UAT Testing Results
                              </a>
                              {/*end::Desc*/}
                              {/*begin::Number*/}
                              <div className="text-gray-400">18kb</div>
                              {/*end::Number*/}
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-aligns-center">
                            {/*begin::Icon*/}
                            <img
                              alt="../../demo9/dist/apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/media/svg/files/css.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a href="#" className="fs-6 text-hover-primary fw-bold">
                                Finance Reports
                              </a>
                              {/*end::Desc*/}
                              {/*begin::Number*/}
                              <div className="text-gray-400">20mb</div>
                              {/*end::Number*/}
                            </div>
                            {/*end::Icon*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                              fill="currentColor"
                            />
                            <path
                              d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          Task
                          <a href="#" className="text-primary fw-bold me-1">
                            #45890
                          </a>
                          merged with
                          <a href="#" className="text-primary fw-bold me-1">
                            #45890
                          </a>
                          in “Ads Pro Admin Dashboard project:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Initiated at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Nina Nilson"
                          >
                            <img src="assets/media/avatars/300-14.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                              fill="currentColor"
                            />
                            <path
                              d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          3 new application design concepts added:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Created at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Marcus Dotson"
                          >
                            <img src="assets/media/avatars/300-2.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                          {/*begin::Item*/}
                          <div className="overlay me-10">
                            {/*begin::Image*/}
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-29.jpg"
                              />
                            </div>
                            {/*end::Image*/}
                            {/*begin::Link*/}
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                            {/*end::Link*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="overlay me-10">
                            {/*begin::Image*/}
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-31.jpg"
                              />
                            </div>
                            {/*end::Image*/}
                            {/*begin::Link*/}
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                            {/*end::Link*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="overlay">
                            {/*begin::Image*/}
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-40.jpg"
                              />
                            </div>
                            {/*end::Image*/}
                            {/*begin::Link*/}
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                            {/*end::Link*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          New case
                          <a href="#" className="text-primary fw-bold me-1">
                            #67890
                          </a>
                          is assigned to you in Multi-platform Database Design project
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="overflow-auto pb-5">
                          {/*begin::Wrapper*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Added at 4:23 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <a href="#" className="text-primary fw-bold me-1">
                              Alice Tan
                            </a>
                            {/*end::User*/}
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                              fill="currentColor"
                            />
                            <path
                              d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          You have received a new order:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Placed at 5:05 AM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Robert Rich"
                          >
                            <img src="assets/media/avatars/300-4.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        {/*begin::Notice*/}
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                          {/*begin::Icon*/}
                          {/*begin::Svg Icon | path: icons/duotune/coding/cod004.svg*/}
                          <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z"
                                fill="currentColor"
                              />
                              <path
                                d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          {/*end::Icon*/}
                          {/*begin::Wrapper*/}
                          <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                            {/*begin::Content*/}
                            <div className="mb-3 mb-md-0 fw-semibold">
                              <h4 className="text-gray-900 fw-bold">
                                Database Backup Process Completed!
                              </h4>
                              <div className="fs-6 text-gray-700 pe-7">
                                Login into Admin Dashboard to make sure the data
                                integrity is OK
                              </div>
                            </div>
                            {/*end::Content*/}
                            {/*begin::Action*/}
                            <a
                              href="#"
                              className="btn btn-primary px-6 align-self-center text-nowrap"
                            >
                              Proceed
                            </a>
                            {/*end::Action*/}
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Notice*/}
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line w-40px" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          New order
                          <a href="#" className="text-primary fw-bold me-1">
                            #67890
                          </a>
                          is placed for Workshow Planning &amp; Budget Estimation
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Placed at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <a href="#" className="text-primary fw-bold me-1">
                            Jimmy Bold
                          </a>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                </div>
                {/*end::Timeline items*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Body*/}
            {/*begin::Footer*/}
            <div className="card-footer py-5 text-center" id="kt_activities_footer">
              <a
                href="../../demo9/dist/pages/user-profile/activity.html"
                className="btn btn-bg-body text-primary"
              >
                View All Activities
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                <span className="svg-icon svg-icon-3 svg-icon-primary">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x={18}
                      y={13}
                      width={13}
                      height={2}
                      rx={1}
                      transform="rotate(-180 18 13)"
                      fill="currentColor"
                    />
                    <path
                      d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </a>
            </div>
            {/*end::Footer*/}
          </div>
        </div>
        {/*end::Activities drawer*/}
        {/*begin::Chat drawer*/}
        <div
          id="kt_drawer_chat"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="chat"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_chat_toggle"
          data-kt-drawer-close="#kt_drawer_chat_close"
        >
          {/*begin::Messenger*/}
          <div
            className="card w-100 rounded-0 border-0"
            id="kt_drawer_chat_messenger"
          >
            {/*begin::Card header*/}
            <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
              {/*begin::Title*/}
              <div className="card-title">
                {/*begin::User*/}
                <div className="d-flex justify-content-center flex-column me-3">
                  <a
                    href="#"
                    className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  >
                    Brian Cox
                  </a>
                  {/*begin::Info*/}
                  <div className="mb-0 lh-1">
                    <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                    <span className="fs-7 fw-semibold text-muted">Active</span>
                  </div>
                  {/*end::Info*/}
                </div>
                {/*end::User*/}
              </div>
              {/*end::Title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <div className="me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="bi bi-three-dots fs-3" />
                  </button>
                  {/*begin::Menu 3*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    {/*begin::Heading*/}
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Contacts
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_users_search"
                      >
                        Add Contact
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link flex-stack px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_invite_friends"
                      >
                        Invite Contacts
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="Specify a contact email to send an invitation"
                        />
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Groups</span>
                        <span className="menu-arrow" />
                      </a>
                      {/*begin::Menu sub*/}
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Create Group
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Invite Members
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu sub*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3 my-1">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        title="Coming soon"
                      >
                        Settings
                      </a>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu 3*/}
                </div>
                {/*end::Menu*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  id="kt_drawer_chat_close"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body" id="kt_drawer_chat_messenger_body">
              {/*begin::Messages*/}
              <div
                className="scroll-y me-n5 pe-5"
                data-kt-element="messages"
                data-kt-scroll="true"
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
                data-kt-scroll-offset="0px"
              >
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">2 mins</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      How likely are you to recommend our company to your friends and
                      family ?
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">5 mins</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Hey there, we’re just writing to let you know that you’ve been
                      subscribed to a repository on GitHub.
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">1 Hour</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Ok, Understood!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">2 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      You’ll receive notifications for all issues, pull requests!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">3 Hours</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      You can unwatch this repository immediately by clicking here:
                      <a href="https://keenthemes.com">Keenthemes.com</a>
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">4 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Most purchased Business courses during this sale!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">5 Hours</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Company BBQ to celebrate the last quater achievements and goals.
                      Food and drinks provided
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(template for out)*/}
                <div
                  className="d-flex justify-content-end mb-10 d-none"
                  data-kt-element="template-out"
                >
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">Just now</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    />
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(template for out)*/}
                {/*begin::Message(template for in)*/}
                <div
                  className="d-flex justify-content-start mb-10 d-none"
                  data-kt-element="template-in"
                >
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">Just now</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Right before vacation season we have the next Big Deal for you.
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(template for in)*/}
              </div>
              {/*end::Messages*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
              {/*begin::Input*/}
              <textarea
                className="form-control form-control-flush mb-3"
                rows={1}
                data-kt-element="input"
                placeholder="Type a message"
                defaultValue={""}
              />
              {/*end::Input*/}
              {/*begin:Toolbar*/}
              <div className="d-flex flex-stack">
                {/*begin::Actions*/}
                <div className="d-flex align-items-center me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="bi bi-paperclip fs-3" />
                  </button>
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="bi bi-upload fs-3" />
                  </button>
                </div>
                {/*end::Actions*/}
                {/*begin::Send*/}
                <button
                  className="btn btn-primary"
                  type="button"
                  data-kt-element="send"
                >
                  Send
                </button>
                {/*end::Send*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Card footer*/}
          </div>
          {/*end::Messenger*/}
        </div>
        {/*end::Chat drawer*/}
        {/*begin::Chat drawer*/}
        <div
          id="kt_shopping_cart"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="cart"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
          data-kt-drawer-close="#kt_drawer_shopping_cart_close"
        >
          {/*begin::Messenger*/}
          <div className="card card-flush w-100 rounded-0">
            {/*begin::Card header*/}
            <div className="card-header">
              {/*begin::Title*/}
              <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
              {/*end::Title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar">
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  id="kt_drawer_shopping_cart_close"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body hover-scroll-overlay-y h-400px pt-5">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="../../demo9/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Iblender
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      The best kitchen gadget in 2022
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-1.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="../../demo9/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      SmartCleaner
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Smart tool for cooking
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-3.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="../../demo9/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      CameraMaxr
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Professional camera for edge
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-8.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="../../demo9/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-26.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="../../demo9/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      MotionWire
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Perfect animation tool
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-21.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="../../demo9/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Samsung
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Profile info,Timeline etc
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-34.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="../../demo9/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr090.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-27.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Total</span>
                <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Sub total</span>
                <span className="text-primary fw-bolder fs-5">$ 246.35</span>
              </div>
              {/*end::Item*/}
              {/*end::Action*/}
              <div className="d-flex justify-content-end mt-9">
                <a href="#" className="btn btn-primary d-flex justify-content-end">
                  Pleace Order
                </a>
              </div>
              {/*end::Action*/}
            </div>
            {/*end::Card footer*/}
          </div>
          {/*end::Messenger*/}
        </div>
        {/*end::Chat drawer*/}
        {/*end::Drawers*/}
        {/*end::Main*/}
        {/*begin::Engage*/}
        <div className="app-engage" id="kt_app_engage">
          {/*begin::Prebuilts toggle*/}
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#kt_app_engage_prebuilts_modal"
            className="app-engage-btn hover-dark"
          >
            {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
            <span className="svg-icon svg-icon-1 pt-1 mb-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.3"
                  d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}Prebuilts
          </a>
          {/*end::Prebuilts toggle*/}
          {/*begin::Get help*/}
          <a
            href="https://devs.keenthemes.com"
            target="_blank"
            className="app-engage-btn hover-primary"
          >
            {/*SVG file not found: icons/duotune/general/gen063.svg*/}
            Get Help
          </a>
          {/*end::Get help*/}
          {/*begin::Prebuilts toggle*/}
          <a
            href="https://1.envato.market/EA4JP"
            target="_blank"
            className="app-engage-btn hover-success"
          >
            {/*SVG file not found: icons/duotune/general/gen064.svg*/}
            Buy Now
          </a>
          {/*end::Prebuilts toggle*/}
          {/*begin::Engage close*/}
          <a
            href="#"
            id="kt_app_engage_toggle_off"
            className="app-engage-btn app-engage-btn-toggle-off text-hover-primary p-0"
          >
            {/*SVG file not found: icons/duotune/arrows/arr097.svg*/}
          </a>
          {/*end::Engage close*/}
          {/*begin::Engage close*/}
          <a
            href="#"
            id="kt_app_engage_toggle_on"
            className="app-engage-btn app-engage-btn-toggle-on text-hover-primary p-0"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-custom-class="tooltip-inverse"
            data-bs-dimiss="click"
            title="Explore Metronic"
          >
            {/*SVG file not found: icons/duotune/general/gen065.svg*/}
          </a>
          {/*end::Engage close*/}
        </div>
        {/*end::Engage*/}
        {/*begin::Engage modals*/}
        {/*begin::Modal - Sitemap*/}
        <div
          className="modal fade bg-dark bg-opacity-75"
          id="kt_app_engage_prebuilts_modal"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div
            className="modal-dialog modal-fullscreen p-5 p-lg-10"
            id="kt_engage_prebuilts_modal_dialog"
          >
            {/*begin::Modal content*/}
            <div className="modal-content rounded-4">
              {/*begin::Modal header*/}
              <div
                className="modal-header flex-stack border-0 px-10 pt-5 pb-0"
                id="kt_engage_prebuilts_header"
              >
                {/*begin::View menu*/}
                <div
                  id="kt_app_engage_prebuilts_view_menu"
                  className="position-relative z-index-1"
                >
                  {/*begin::Toggle*/}
                  <button
                    type="button"
                    data-kt-element="selected"
                    className="btn btn-flex px-0 rotate-"
                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                    data-kt-menu-placement="bottom-start"
                    data-kt-menu-offset="0px, -1px"
                  >
                    {/*begin::Title*/}
                    <span
                      className="fs-6 fw-bold text-gray-600 me-2"
                      data-kt-element="title"
                    >
                      Image View
                    </span>
                    {/*end::Title*/}
                    {/*begin::Arrow*/}
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                    <span className="svg-icon svg-icon-4 svg-icon-gray-600 rotate-180-">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    {/*end::Arrow*/}
                  </button>
                  {/*end::Toggle*/}
                  {/*begin::Menu*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-active-bg menu-state-primary menu-gray-600 menu-rounded w-150px py-3 px-3"
                    data-kt-menu="true"
                  >
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a
                        href="#"
                        className="menu-link px-4 py-2 active"
                        data-kt-mode="image"
                      >
                        Image View
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item">
                      {/*begin::Menu link*/}
                      <a href="#" className="menu-link px-4 py-2" data-kt-mode="text">
                        Text View
                      </a>
                      {/*end::Menu link*/}
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::View menu*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary me-n2 position-relative z-index-1"
                  data-bs-dismiss="modal"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen034.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.3"
                        x={2}
                        y={2}
                        width={20}
                        height={20}
                        rx={5}
                        fill="currentColor"
                      />
                      <rect
                        x={7}
                        y="15.3137"
                        width={12}
                        height={2}
                        rx={1}
                        transform="rotate(-45 7 15.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="8.41422"
                        y={7}
                        width={12}
                        height={2}
                        rx={1}
                        transform="rotate(45 8.41422 7)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div
                className="modal-body pt-0 pb-5 px-15 mt-n5"
                id="kt_app_engage_prebuilts_body"
              >
                <div className="container-fluid">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".app-prebuilts-thumbnail { border: 1px solid var(--kt-body-bg); filter: drop-shadow(0px 0px 50px rgba(49, 52, 122, 0.12)); }"
                    }}
                  />
                  {/*begin::Image view*/}
                  <div className="d-block" id="kt_app_engage_prebuilts_view_image">
                    {/*begin::Tabs wrapper*/}
                    <div
                      className="d-flex flex-center"
                      id="kt_app_engage_prebuilts_view_image_tabs"
                    >
                      {/*begin::Tabs*/}
                      <ul className="nav nav-tabs border-0 mb-5">
                        {/*begin::Tab item*/}
                        <li className="nav-item px-2">
                          {/*begin::Tab link*/}
                          <a
                            className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold"
                            data-bs-toggle="tab"
                            href="#kt_app_engage_prebuilts_tab_demos"
                          >
                            Layouts
                          </a>
                          {/*end::Tab link*/}
                        </li>
                        {/*end::Tab item*/}
                        {/*begin::Tab item*/}
                        <li className="nav-item px-2">
                          {/*begin::Tab link*/}
                          <a
                            className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold active"
                            data-bs-toggle="tab"
                            href="#kt_app_engage_prebuilts_tab_dashboards"
                          >
                            Dashboards
                          </a>
                          {/*end::Tab link*/}
                        </li>
                        {/*end::Tab item*/}
                        {/*begin::Tab item*/}
                        <li className="nav-item px-2">
                          {/*begin::Tab link*/}
                          <a
                            className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold"
                            data-bs-toggle="tab"
                            href="#kt_app_engage_prebuilts_tab_pages"
                          >
                            Pages
                          </a>
                          {/*end::Tab link*/}
                        </li>
                        {/*end::Tab item*/}
                        {/*begin::Tab item*/}
                        <li className="nav-item px-2">
                          {/*begin::Tab link*/}
                          <a
                            className="nav-link btn btn-active-light btn-color-gray-600 btn-active-color-gray-800 fs-5 fw-bold"
                            data-bs-toggle="tab"
                            href="#kt_app_engage_prebuilts_tab_apps"
                          >
                            Apps
                          </a>
                          {/*end::Tab link*/}
                        </li>
                        {/*end::Tab item*/}
                      </ul>
                      {/*end::Tabs*/}
                    </div>
                    {/*end::Tabs wrapper*/}
                    {/*begin::Tab content*/}
                    <div className="tab-content">
                      <div
                        className="pt-5 tab-pane fade"
                        id="kt_app_engage_prebuilts_tab_demos"
                        role="tabpanel"
                      >
                        {/*begin::Scroll wrapper*/}
                        <div
                          className="hover-scroll-y pe-12 me-n12"
                          data-kt-scroll="true"
                          data-kt-scroll-height="auto"
                          data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body"
                          data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs"
                          data-kt-scroll-offset="215px"
                        >
                          {/*begin::Row*/}
                          <div className="row gy-10">
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo1/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Metronic Original
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo1.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo2/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  SaaS App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo2.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo30/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Sales Tracking App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo30.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo39/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Billing SaaS
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo39.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo31/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Marketing Automation
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo31.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo27/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Databox Dashboard
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo27.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo6/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Time Reporting
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo6.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo3/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  New Trend
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo3.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo23/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Member Dashboard
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo23.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo38/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Email Marketing
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo38.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo36/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Digital Marketing
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo36.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo10/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Project Grid
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo10.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo35/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Traffic Analytics
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo35.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo8/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Analytics App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo8.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo25/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  User Guiding App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo25.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo20/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  CRM Software
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo20.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo7/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  CRM Dashboard
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo7.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo43/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Healthcare Dashboard
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo43.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo32/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Delivery Management
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo32.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo42/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Calendar Workspace
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo42.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo44/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Recruit Automation
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo44.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo33/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Social Campaings
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo33.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo37/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Cloud Suite
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo37.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo11/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Finance Planner
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo11.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo16/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Podcast App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo16.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo26/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Planable App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo26.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo22/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Media Publisher
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo22.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo19/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Reports Panel
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo19.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo40/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  HR App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo40.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo29/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Project Workspace
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo29.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo24/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Helpdesk App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo24.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo4/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Jobs Site
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo4.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo41/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Business Intelligence
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo41.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo18/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Goal Tracking
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo18.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo21/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Monochrome App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo21.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo34/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Finance Analytics
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo34.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo15/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Crypto Planner
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo15.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo14/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Project Workplace
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo14.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo9/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Sales Manager
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo9.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo5/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Support Forum
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo5.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo13/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Classic Dashboard
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo13.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo12/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Data Analyzer
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo12.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo48/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Cloud ERP
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo48.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo28/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  eCommerce App
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo28.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo17/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Events Scheduler
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo17.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="https://preview.keenthemes.com/metronic8/demo49/index.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  KPI Tracking
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/demos/demo49.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Row*/}
                        </div>
                        {/*end::Scroll wrapper*/}
                      </div>
                      <div
                        className="pt-5 tab-pane fade show active"
                        id="kt_app_engage_prebuilts_tab_dashboards"
                        role="tabpanel"
                      >
                        {/*begin::Scroll wrapper*/}
                        <div
                          className="hover-scroll-y pe-12 me-n12"
                          data-kt-scroll="true"
                          data-kt-scroll-height="auto"
                          data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body"
                          data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs"
                          data-kt-scroll-offset="215px"
                        >
                          {/*begin::Row*/}
                          <div className="row gy-10">
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/marketing.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Marketing
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/marketing.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/social.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Social
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/social.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/ecommerce.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Ecommerce
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/ecommerce.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/store-analytics.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Store-analytics
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/store-analytics.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/logistics.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Logistics
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/logistics.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/delivery.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Delivery
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/delivery.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/online-courses.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Online-courses
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/online-courses.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/school.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  School
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/school.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/crypto.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Crypto
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/crypto.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/finance-performance.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Finance-performance
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/finance-performance.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/website-analytics.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Website-analytics
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/website-analytics.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/bidding.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Bidding
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/bidding.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/podcast.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Podcast
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/podcast.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/projects.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Projects
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/projects.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/call-center.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Call-center
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/call-center.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/dashboards/pos.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  POS
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/dashboards/pos.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Row*/}
                        </div>
                        {/*end::Scroll wrapper*/}
                      </div>
                      <div
                        className="pt-5 tab-pane fade"
                        id="kt_app_engage_prebuilts_tab_apps"
                        role="tabpanel"
                      >
                        {/*begin::Scroll wrapper*/}
                        <div
                          className="hover-scroll-y pe-12 me-n12"
                          data-kt-scroll="true"
                          data-kt-scroll-height="auto"
                          data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body"
                          data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_image_tabs"
                          data-kt-scroll-offset="215px"
                        >
                          {/*begin::Row*/}
                          <div className="row gy-10">
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/projects/list/list.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Projects
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/projects.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/ecommerce/catalog/products/products.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Ecommerce
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/ecommerce.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/customers/list/list.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Customers
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/customers.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/subscriptions/list/list.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Subscriptions
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/subscriptions.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/user-management/users/list/list.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  User Management
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/user-management.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/invoices/create/main.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Invoices
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/invoices.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/support-center/overview/main.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Support Center
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/support-center.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/chat/private.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Chat
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/chat.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/calendar/calendar.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Calendar
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/calendar.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/file-manager/list/folders.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  File Manager
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/file-manager.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/inbox/listing/listing.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Inbox
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/inbox.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-lg-4">
                              {/*begin::Preview*/}
                              <a
                                href="../../demo9/dist/apps/contacts/getting-started.html"
                                data-kt-href="true"
                                className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                              >
                                {/*begin::Title*/}
                                <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                  Contacts
                                </h3>
                                {/*end::Title*/}
                                {/*begin::Thumbnail*/}
                                <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                  <img
                                    src="assets/media/preview/demos/placeholder.jpg"
                                    data-src="assets/media/preview/prebuilts/apps/contacts.png"
                                    className="lozad w-100 rounded"
                                  />
                                </span>
                                {/*end::Thumbnail*/}
                              </a>
                              {/*end::Preview*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Row*/}
                        </div>
                        {/*end::Scroll wrapper*/}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="kt_app_engage_prebuilts_tab_pages"
                      >
                        {/*begin::Tabs wrapper*/}
                        <div className="d-flex flex-center mb-5">
                          <div className="border-bottom">
                            {/*begin::Tabs*/}
                            <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-6 fw-bold m-0 p-0 gap-4">
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4 active"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_authentication"
                                >
                                  Authentication
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_general"
                                >
                                  General
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_account"
                                >
                                  Account
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_modals"
                                >
                                  Modals
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_wizards"
                                >
                                  Wizards
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_search"
                                >
                                  Search
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_widgets"
                                >
                                  Widgets
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                              {/*begin::Tab item*/}
                              <li className="nav-item p-0 m-0">
                                {/*begin::Tab link*/}
                                <a
                                  className="nav-link text-muted text-active-primary pt-0 pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_app_engage_prebuilts_tab_pages_email-templates"
                                >
                                  Email Templates
                                </a>
                                {/*end::Tab link*/}
                              </li>
                              {/*end::Tab item*/}
                            </ul>
                            {/*end::Tabs*/}
                          </div>
                        </div>
                        {/*end::Tabs wrapper*/}
                        {/*begin::Scroll wrapper*/}
                        <div
                          className="hover-scroll-y pe-12 me-n12"
                          data-kt-scroll="true"
                          data-kt-scroll-height="auto"
                          data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body, #kt_app_engage_prebuilts_view_image"
                          data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_text_heading"
                          data-kt-scroll-offset="250px"
                        >
                          {/*begin::Tab content*/}
                          <div className="tab-content">
                            <div
                              className="tab-pane fade show active"
                              id="kt_app_engage_prebuilts_tab_pages_authentication"
                              role="tabpanel"
                            >
                              {/*begin::Row*/}
                              <div className="row g-10">
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/layouts/corporate/sign-in.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Corporate
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-corporate.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/layouts/creative/sign-in.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Creative
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-creative.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/layouts/fancy/sign-in.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Fancy
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-fancy.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/layouts/overlay/sign-in.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Overlay
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-overlay.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/extended/multi-steps-sign-up.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Multi-step
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-multistep.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/extended/two-factor-auth.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      2 Factor Auth
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-2factor.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/general/password-confirmation.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Password Changed
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-passwordchanged.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/general/verify-email.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Verify Email
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-verifyemail.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/general/welcome.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Welcome
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-welcome.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/general/coming-soon.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Coming Soon
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-comingsoon.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/general/account-deactivated.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Account Deactivated
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-accountdeactivated.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/general/error-404.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      404 Page
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-404.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/general/error-500.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      505 Page
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/auth-500.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_app_engage_prebuilts_tab_pages_general"
                              role="tabpanel"
                            >
                              <div className="mb-5">
                                {/*begin::Collapse toggle*/}
                                <a
                                  className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible active"
                                  data-bs-toggle="collapse"
                                  href="#kt_app_engage_prebuilts_tab_pages_general_user-profile"
                                >
                                  <span className="fw-bolder fs-2">User Profile</span>
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                  <span className="svg-icon toggle-off text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="10.8891"
                                        y="17.8033"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-90 10.8891 17.8033)"
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.01041"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                  <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.0104"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Collapse toggle*/}
                                {/*begin::Collapse content*/}
                                <div
                                  className="show"
                                  id="kt_app_engage_prebuilts_tab_pages_general_user-profile"
                                >
                                  {/*begin::Row*/}
                                  <div className="row g-10 pt-2 pb-5">
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/user-profile/overview.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Profile Overview
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/profile-overview.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/user-profile/projects.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          User Projects
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/profile-overview.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/user-profile/campaigns.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          User Campaigns
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/profile-campaigns.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/user-profile/documents.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          User Documents
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/profile-documents.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/user-profile/followers.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          User Followers
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/profile-followers.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/user-profile/activity.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          User Activity
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/profile-activity.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                  </div>
                                  {/*end::Row*/}
                                </div>
                                {/*end::Collapse content*/}
                              </div>
                              <div className="mb-5">
                                {/*begin::Collapse toggle*/}
                                <a
                                  className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed"
                                  data-bs-toggle="collapse"
                                  href="#kt_app_engage_prebuilts_tab_pages_general_corporate"
                                >
                                  <span className="fw-bolder fs-2">Corporate</span>
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                  <span className="svg-icon toggle-off text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="10.8891"
                                        y="17.8033"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-90 10.8891 17.8033)"
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.01041"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                  <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.0104"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Collapse toggle*/}
                                {/*begin::Collapse content*/}
                                <div
                                  className="collapse"
                                  id="kt_app_engage_prebuilts_tab_pages_general_corporate"
                                >
                                  {/*begin::Row*/}
                                  <div className="row g-10 pt-2 pb-5">
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/about.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          About Us
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/corporate-aboutus.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/contact.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Contact Us
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/corporate-contactus.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/licenses.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          License
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/corporate-license.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/team.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Our Team
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/corporate-ourteam.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/sitemap.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Sitemap
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/corporate-sitemap.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                  </div>
                                  {/*end::Row*/}
                                </div>
                                {/*end::Collapse content*/}
                              </div>
                              <div className="mb-5">
                                {/*begin::Collapse toggle*/}
                                <a
                                  className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed"
                                  data-bs-toggle="collapse"
                                  href="#kt_app_engage_prebuilts_tab_pages_general_social"
                                >
                                  <span className="fw-bolder fs-2">Social</span>
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                  <span className="svg-icon toggle-off text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="10.8891"
                                        y="17.8033"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-90 10.8891 17.8033)"
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.01041"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                  <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.0104"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Collapse toggle*/}
                                {/*begin::Collapse content*/}
                                <div
                                  className="collapse"
                                  id="kt_app_engage_prebuilts_tab_pages_general_social"
                                >
                                  {/*begin::Row*/}
                                  <div className="row g-10 pt-2 pb-5">
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/social/feeds.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Activity
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/social-activity.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/social/activity.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Feeds
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/social-feeds.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/social/followers.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Followers
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/social-followers.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/social/settings.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Settings
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/social-settings.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                  </div>
                                  {/*end::Row*/}
                                </div>
                                {/*end::Collapse content*/}
                              </div>
                              <div className="mb-5">
                                {/*begin::Collapse toggle*/}
                                <a
                                  className="btn btn-flex btn-color-dark flex-stack p-0 mb-5 toggle collapsible collapsed"
                                  data-bs-toggle="collapse"
                                  href="#kt_app_engage_prebuilts_tab_pages_general_others"
                                >
                                  <span className="fw-bolder fs-2">Others</span>
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
                                  <span className="svg-icon toggle-off text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="10.8891"
                                        y="17.8033"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-90 10.8891 17.8033)"
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.01041"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen036.svg*/}
                                  <span className="svg-icon toggle-on text-primary svg-icon-2 ms-4">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x={2}
                                        y={2}
                                        width={20}
                                        height={20}
                                        rx={5}
                                        fill="currentColor"
                                      />
                                      <rect
                                        x="6.0104"
                                        y="10.9247"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </a>
                                {/*end::Collapse toggle*/}
                                {/*begin::Collapse content*/}
                                <div
                                  className="collapse"
                                  id="kt_app_engage_prebuilts_tab_pages_general_others"
                                >
                                  {/*begin::Row*/}
                                  <div className="row g-10 pt-2 pb-5">
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/faq/classic.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          FAQ Classic
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/faq-classic.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/faq/extended.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          FAQ Extended
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/faq-extended.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/blog/home.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Blog Home
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/blog-home.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                    {/*begin::Col*/}
                                    <div className="col-lg-4">
                                      {/*begin::Preview*/}
                                      <a
                                        href="../../demo9/dist/pages/blog/post.html"
                                        data-kt-href="true"
                                        className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                      >
                                        {/*begin::Title*/}
                                        <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                          Blog Post
                                        </h3>
                                        {/*end::Title*/}
                                        {/*begin::Thumbnail*/}
                                        <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                          <img
                                            src="assets/media/preview/demos/placeholder.jpg"
                                            data-src="assets/media/preview/prebuilts/pages/blog-post.png"
                                            className="lozad w-100 rounded"
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                      </a>
                                      {/*end::Preview*/}
                                    </div>
                                    {/*end::Col*/}
                                  </div>
                                  {/*end::Row*/}
                                </div>
                                {/*end::Collapse content*/}
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_app_engage_prebuilts_tab_pages_account"
                              role="tabpanel"
                            >
                              {/*begin::Row*/}
                              <div className="row g-10">
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/overview.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Overview
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-overview.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/settings.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Settings
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-settings.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/billing.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Billing
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-billing.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/security.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Security
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-security.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/referrals.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Referrals
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-referrals.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/logs.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Logs
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-logs.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/api-keys.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      API Keys
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-apikeys.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/statements.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Statements
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-statements.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/account/billing.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Billing
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/account-billing.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_app_engage_prebuilts_tab_pages_modals"
                              role="tabpanel"
                            >
                              {/*begin::Row*/}
                              <div className="row g-10">
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/general/view-users.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      View Friends
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-viewfriends.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/general/upgrade-plan.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Upgrade Plan
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-upgradeplan.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/wizards/top-up-wallet.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Topup Wallet
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-topupwallet.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/general/share-earn.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Share &amp; Earn
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-shareandearn.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/general/select-users.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Select User
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-selectuser.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/forms/bidding.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Place Bid
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-placeyourbid.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/wizards/offer-a-deal.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Offer Deal
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-offeradeal.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/forms/new-target.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      New Target
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-newtarget.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/forms/new-card.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      New Card
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-newcard.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/forms/new-address.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      New Address
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-newaddress.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/general/invite-friends.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Invite Friend
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-invitefriend.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/wizards/create-project.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Create Project
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-createproject.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/wizards/create-campaign.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Create Campaign
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-createcampaign.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/wizards/create-account.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Create Business Account
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-createbusinessacc.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/wizards/create-app.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Create App
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-createapp.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/forms/create-api-key.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Create Api Key
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-createapikey.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/modals/wizards/two-factor-authentication.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      2 Factor Auth
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/modal-2factorauth.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_app_engage_prebuilts_tab_pages_wizards"
                              role="tabpanel"
                            >
                              {/*begin::Row*/}
                              <div className="row g-10">
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/wizards/horizontal.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      2 Factor Auth
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/wizard-2factorauth.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/wizards/horizontal.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Horizontal
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/wizard-horizontal.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/wizards/vertical.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Vertical
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/wizard-vertical.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_app_engage_prebuilts_tab_pages_search"
                              role="tabpanel"
                            >
                              {/*begin::Row*/}
                              <div className="row g-10">
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/search/users.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Search Users
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/search-users.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/search/horizontal.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Search Horizontal
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/search-horizontal.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/search/vertical.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Search Vertical
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/search-vertical.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/utilities/search/select-location.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Search Location
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/search-location.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_app_engage_prebuilts_tab_pages_widgets"
                              role="tabpanel"
                            >
                              {/*begin::Row*/}
                              <div className="row g-10">
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/widgets/charts.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Charts
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/widgets-charts.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/widgets/feeds.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Feeds
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/widgets-feeds.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/widgets/lists.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Lists
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/widgets-lists.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/widgets/mixed.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Mixed
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/widgets-mixed.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/widgets/statistics.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Statistics
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/widgets-stats.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/widgets/tables.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Tables
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/widgets-tables.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="kt_app_engage_prebuilts_tab_pages_email-templates"
                              role="tabpanel"
                            >
                              {/*begin::Row*/}
                              <div className="row g-10">
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/email/welcome-message.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Welcome
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/email-welcome.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/email/subscription-confirmed.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Subscription Confirmed
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/email-subscriptionconfirmed.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/email/reset-password.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Reset Password
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/email-resetpassword.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/email/card-declined.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Card Declined
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/email-creditcarddeclined.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/email/promo-1.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Promotion 1
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/email-promo1.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/email/promo-2.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Promotion 2
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/email-promo2.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-lg-4">
                                  {/*begin::Preview*/}
                                  <a
                                    href="../../demo9/dist/authentication/email/promo-3.html"
                                    data-kt-href="true"
                                    className="preview-thumbnail bg-light border d-flex flex-column rounded-3 hover-elevate-up overflow-hidden"
                                  >
                                    {/*begin::Title*/}
                                    <h3 className="ps-12 pt-9 mb-7 text-gray-900 fw-bold letter-spacing fs-4">
                                      Promotion 3
                                    </h3>
                                    {/*end::Title*/}
                                    {/*begin::Thumbnail*/}
                                    <span className="app-prebuilts-thumbnail rounded ms-12 mb-n6 mb-lg-n15 me-n6 mh-350px overflow-hidden">
                                      <img
                                        src="assets/media/preview/demos/placeholder.jpg"
                                        data-src="assets/media/preview/prebuilts/pages/email-promo3.png"
                                        className="lozad w-100 rounded"
                                      />
                                    </span>
                                    {/*end::Thumbnail*/}
                                  </a>
                                  {/*end::Preview*/}
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                          </div>
                          {/*end::Tab content*/}
                        </div>
                        {/*end::Scroll wrapper*/}
                      </div>
                    </div>
                    {/*end::Tab content*/}
                  </div>
                  {/*end::Image view*/}
                  {/*begin::Text view*/}
                  <div className="pt-2 d-none" id="kt_app_engage_prebuilts_view_text">
                    {/*begin::Heading*/}
                    <h1
                      className="fs-2x text-dark fw-bolder text-center mb-4"
                      id="kt_app_engage_prebuilts_view_text_heading"
                    >
                      Sitemap
                    </h1>
                    {/*end::Heading*/}
                    {/*begin::Wrapper*/}
                    <div
                      id="kt_app_engage_prebuilts_view_text_heading"
                      className="hover-scroll-y pe-12 me-n12"
                      data-kt-scroll="true"
                      data-kt-scroll-height="auto"
                      data-kt-scroll-wrappers="#kt_app_engage_prebuilts_modal, #kt_app_engage_prebuilts_modal_dialog, #kt_app_engage_prebuilts_body, #kt_app_engage_prebuilts_view_text"
                      data-kt-scroll-dependencies="#kt_app_engage_prebuilts_header, #kt_app_engage_prebuilts_view_text_heading"
                      data-kt-scroll-offset="190px"
                    >
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Layouts</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo1/index.html"
                              >
                                Metronic Original
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo2/index.html"
                              >
                                SaaS App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo30/index.html"
                              >
                                Sales Tracking App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo39/index.html"
                              >
                                Billing SaaS
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo31/index.html"
                              >
                                Marketing Automation
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo27/index.html"
                              >
                                Databox Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo6/index.html"
                              >
                                Time Reporting
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo3/index.html"
                              >
                                New Trend
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo23/index.html"
                              >
                                Member Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo38/index.html"
                              >
                                Email Marketing
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo36/index.html"
                              >
                                Digital Marketing
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo10/index.html"
                              >
                                Project Grid
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo35/index.html"
                              >
                                Traffic Analytics
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo8/index.html"
                              >
                                Analytics App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo25/index.html"
                              >
                                User Guiding App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo20/index.html"
                              >
                                CRM Software
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo7/index.html"
                              >
                                CRM Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo43/index.html"
                              >
                                Healthcare Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo32/index.html"
                              >
                                Delivery Management
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo42/index.html"
                              >
                                Calendar Workspace
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo44/index.html"
                              >
                                Recruit Automation
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo33/index.html"
                              >
                                Social Campaings
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo37/index.html"
                              >
                                Cloud Suite
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo11/index.html"
                              >
                                Finance Planner
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo16/index.html"
                              >
                                Podcast App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo26/index.html"
                              >
                                Planable App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo22/index.html"
                              >
                                Media Publisher
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo19/index.html"
                              >
                                Reports Panel
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo40/index.html"
                              >
                                HR App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo29/index.html"
                              >
                                Project Workspace
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo24/index.html"
                              >
                                Helpdesk App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo4/index.html"
                              >
                                Jobs Site
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo41/index.html"
                              >
                                Business Intelligence
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo18/index.html"
                              >
                                Goal Tracking
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo21/index.html"
                              >
                                Monochrome App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo34/index.html"
                              >
                                Finance Analytics
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo15/index.html"
                              >
                                Crypto Planner
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo14/index.html"
                              >
                                Project Workplace
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo9/index.html"
                              >
                                Sales Manager
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo5/index.html"
                              >
                                Support Forum
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo13/index.html"
                              >
                                Classic Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo12/index.html"
                              >
                                Data Analyzer
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo48/index.html"
                              >
                                Cloud ERP
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo28/index.html"
                              >
                                eCommerce App
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo17/index.html"
                              >
                                Events Scheduler
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="https://preview.keenthemes.com/metronic8/demo49/index.html"
                              >
                                KPI Tracking
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Dashboards</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/index.html"
                              >
                                Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/marketing.html"
                              >
                                Marketing Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/social.html"
                              >
                                Social Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/ecommerce.html"
                              >
                                eCommerce Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/store-analytics.html"
                              >
                                Store Analytics
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/logistics.html"
                              >
                                Logistics
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/delivery.html"
                              >
                                Delivery
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/online-courses.html"
                              >
                                Online Courses
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/school.html"
                              >
                                Hello Tyler
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/crypto.html"
                              >
                                My Balance: 37,045$
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/finance-performance.html"
                              >
                                Finance Performance
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/website-analytics.html"
                              >
                                Website Analytics
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/bidding.html"
                              >
                                Bidding Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/podcast.html"
                              >
                                Podcast Dashboard
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/projects.html"
                              >
                                Projects Dashboard
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/call-center.html"
                              >
                                Call Center
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/dashboards/pos.html"
                              >
                                POS System
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17" />
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">
                          Pages - Authentication
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/layouts/corporate/sign-in.html"
                              >
                                Corporate
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/layouts/creative/sign-in.html"
                              >
                                Creative
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/layouts/fancy/sign-in.html"
                              >
                                Fancy
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/layouts/overlay/sign-in.html"
                              >
                                Overlay
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/extended/multi-steps-sign-up.html"
                              >
                                Multi-step
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/extended/two-factor-auth.html"
                              >
                                2 Factor Auth
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/general/password-confirmation.html"
                              >
                                Password Changed
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/general/verify-email.html"
                              >
                                Verify Email
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/general/welcome.html"
                              >
                                Welcome
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/general/coming-soon.html"
                              >
                                Coming Soon
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/general/account-deactivated.html"
                              >
                                Account Deactivated
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/general/error-404.html"
                              >
                                404 Page
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/general/error-500.html"
                              >
                                505 Page
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Pages - Account</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/overview.html"
                              >
                                Overview
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/settings.html"
                              >
                                Settings
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/billing.html"
                              >
                                Billing
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/security.html"
                              >
                                Security
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/referrals.html"
                              >
                                Referrals
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/logs.html"
                              >
                                Logs
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/api-keys.html"
                              >
                                API Keys
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/statements.html"
                              >
                                Statements
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/account/billing.html"
                              >
                                Billing
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Pages - Modals</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/general/view-users.html"
                              >
                                View Friends
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/general/upgrade-plan.html"
                              >
                                Upgrade Plan
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/wizards/top-up-wallet.html"
                              >
                                Topup Wallet
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/general/share-earn.html"
                              >
                                Share &amp; Earn
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/general/select-users.html"
                              >
                                Select User
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/forms/bidding.html"
                              >
                                Place Bid
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/wizards/offer-a-deal.html"
                              >
                                Offer Deal
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/forms/new-target.html"
                              >
                                New Target
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/forms/new-card.html"
                              >
                                New Card
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/forms/new-address.html"
                              >
                                New Address
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/general/invite-friends.html"
                              >
                                Invite Friend
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/wizards/create-project.html"
                              >
                                Create Project
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/wizards/create-campaign.html"
                              >
                                Create Campaign
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/wizards/create-account.html"
                              >
                                Create Business Account
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/wizards/create-app.html"
                              >
                                Create App
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/forms/create-api-key.html"
                              >
                                Create Api Key
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/modals/wizards/two-factor-authentication.html"
                              >
                                2 Factor Auth
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Pages - Wizards</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/wizards/horizontal.html"
                              >
                                2 Factor Auth
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/wizards/horizontal.html"
                              >
                                Horizontal
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/wizards/vertical.html"
                              >
                                Vertical
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Pages - Search</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/search/users.html"
                              >
                                Search Users
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/search/horizontal.html"
                              >
                                Search Horizontal
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/search/vertical.html"
                              >
                                Search Vertical
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/utilities/search/select-location.html"
                              >
                                Search Location
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Pages - Widgets</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/widgets/charts.html"
                              >
                                Charts
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/widgets/feeds.html"
                              >
                                Feeds
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/widgets/lists.html"
                              >
                                Lists
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/widgets/mixed.html"
                              >
                                Mixed
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/widgets/statistics.html"
                              >
                                Statistics
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/widgets/tables.html"
                              >
                                Tables
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">
                          Pages - Email Templates
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/email/welcome-message.html"
                              >
                                Welcome
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/email/subscription-confirmed.html"
                              >
                                Subscription Confirmed
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/email/reset-password.html"
                              >
                                Reset Password
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/email/card-declined.html"
                              >
                                Card Declined
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/email/promo-1.html"
                              >
                                Promotion 1
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/email/promo-2.html"
                              >
                                Promotion 2
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/authentication/email/promo-3.html"
                              >
                                Promotion 3
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">
                          Pages - General - User Profile
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/user-profile/overview.html"
                              >
                                Profile Overview
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/user-profile/projects.html"
                              >
                                User Projects
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/user-profile/campaigns.html"
                              >
                                User Campaigns
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/user-profile/documents.html"
                              >
                                User Documents
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/user-profile/followers.html"
                              >
                                User Followers
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/user-profile/activity.html"
                              >
                                User Activity
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">
                          Pages - General - Corporate
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/about.html"
                              >
                                About Us
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/contact.html"
                              >
                                Contact Us
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/licenses.html"
                              >
                                License
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/team.html"
                              >
                                Our Team
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/sitemap.html"
                              >
                                Sitemap
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">
                          Pages - General - Social
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/social/feeds.html"
                              >
                                Activity
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/social/activity.html"
                              >
                                Feeds
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/social/followers.html"
                              >
                                Followers
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/social/settings.html"
                              >
                                Settings
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="mb-10 mb-lg-17">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">
                          Pages - General - Others
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/faq/classic.html"
                              >
                                FAQ Classic
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/faq/extended.html"
                              >
                                FAQ Extended
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/blog/home.html"
                              >
                                Blog Home
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/pages/blog/post.html"
                              >
                                Blog Post
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                      {/*begin::Section*/}
                      <div className="">
                        {/*begin::Title*/}
                        <h3 className="text-dark fw-bolder mb-7">Apps</h3>
                        {/*end::Title*/}
                        {/*begin::Row*/}
                        <div className="row">
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/projects/list/list.html.html"
                              >
                                Projects
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/ecommerce/catalog/products/products.html.html"
                              >
                                Ecommerce
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/customers/list/list.html.html"
                              >
                                Customers
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/subscriptions/list/list.html.html"
                              >
                                Subscriptions
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/user-management/users/list/list.html.html"
                              >
                                User Management
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/invoices/create/main.html.html"
                              >
                                Invoices
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/support-center/overview/main.html.html"
                              >
                                Support Center
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/chat/private.html.html"
                              >
                                Chat
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/calendar/calendar.html.html"
                              >
                                Calendar
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-lg-3">
                            {/*begin::List*/}
                            <div className="d-flex flex-column gap-3 gap-lg-5">
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/file-manager/list/folders.html.html"
                              >
                                File Manager
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/inbox/listing/listing.html.html"
                              >
                                Inbox
                              </a>
                              <a
                                className="fw-6 fw-semibold"
                                href="../../demo9/dist/../../demo9/dist/apps/contacts/getting-started.html.html"
                              >
                                Contacts
                              </a>
                            </div>
                            {/*end::List*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Section*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Text view=*/}
                </div>
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Sitemap*/}
        {/*end::Engage modals*/}
        {/*begin::Scrolltop*/}
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
          <span className="svg-icon">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.5"
                x={13}
                y={6}
                width={13}
                height={2}
                rx={1}
                transform="rotate(90 13 6)"
                fill="currentColor"
              />
              <path
                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                fill="currentColor"
              />
            </svg>
          </span>
          {/*end::Svg Icon*/}
        </div>
        {/*end::Scrolltop*/}
        {/*begin::Modals*/}
        {/*begin::Modal - Upgrade plan*/}
        <div
          className="modal fade"
          id="kt_modal_upgrade_plan"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-xl">
            {/*begin::Modal content*/}
            <div className="modal-content rounded">
              {/*begin::Modal header*/}
              <div className="modal-header justify-content-end border-0 pb-0">
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                {/*begin::Heading*/}
                <div className="mb-13 text-center">
                  <h1 className="mb-3">Upgrade a Plan</h1>
                  <div className="text-muted fw-semibold fs-5">
                    If you need more info, please check
                    <a href="#" className="link-primary fw-bold">
                      Pricing Guidelines
                    </a>
                    .
                  </div>
                </div>
                {/*end::Heading*/}
                {/*begin::Plans*/}
                <div className="d-flex flex-column">
                  {/*begin::Nav group*/}
                  <div
                    className="nav-group nav-group-outline mx-auto"
                    data-kt-buttons="true"
                  >
                    <button
                      className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                      data-kt-plan="month"
                    >
                      Monthly
                    </button>
                    <button
                      className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                      data-kt-plan="annual"
                    >
                      Annual
                    </button>
                  </div>
                  {/*end::Nav group*/}
                  {/*begin::Row*/}
                  <div className="row mt-10">
                    {/*begin::Col*/}
                    <div className="col-lg-6 mb-10 mb-lg-0">
                      {/*begin::Tabs*/}
                      <div className="nav flex-column">
                        {/*begin::Tab link*/}
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_startup"
                        >
                          {/*end::Description*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Radio*/}
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultChecked="checked"
                                defaultValue="startup"
                              />
                            </div>
                            {/*end::Radio*/}
                            {/*begin::Info*/}
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Startup
                              </div>
                              <div className="fw-semibold opacity-75">
                                Best for startups
                              </div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Description*/}
                          {/*begin::Price*/}
                          <div className="ms-5">
                            <span className="mb-2">$</span>
                            <span
                              className="fs-3x fw-bold"
                              data-kt-plan-price-month={39}
                              data-kt-plan-price-annual={399}
                            >
                              39
                            </span>
                            <span className="fs-7 opacity-50">
                              /<span data-kt-element="period">Mon</span>
                            </span>
                          </div>
                          {/*end::Price*/}
                        </label>
                        {/*end::Tab link*/}
                        {/*begin::Tab link*/}
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_advanced"
                        >
                          {/*end::Description*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Radio*/}
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultValue="advanced"
                              />
                            </div>
                            {/*end::Radio*/}
                            {/*begin::Info*/}
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Advanced
                              </div>
                              <div className="fw-semibold opacity-75">
                                Best for 100+ team size
                              </div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Description*/}
                          {/*begin::Price*/}
                          <div className="ms-5">
                            <span className="mb-2">$</span>
                            <span
                              className="fs-3x fw-bold"
                              data-kt-plan-price-month={339}
                              data-kt-plan-price-annual={3399}
                            >
                              339
                            </span>
                            <span className="fs-7 opacity-50">
                              /<span data-kt-element="period">Mon</span>
                            </span>
                          </div>
                          {/*end::Price*/}
                        </label>
                        {/*end::Tab link*/}
                        {/*begin::Tab link*/}
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_enterprise"
                        >
                          {/*end::Description*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Radio*/}
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultValue="enterprise"
                              />
                            </div>
                            {/*end::Radio*/}
                            {/*begin::Info*/}
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Enterprise
                                <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">
                                  Popular
                                </span>
                              </div>
                              <div className="fw-semibold opacity-75">
                                Best value for 1000+ team
                              </div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Description*/}
                          {/*begin::Price*/}
                          <div className="ms-5">
                            <span className="mb-2">$</span>
                            <span
                              className="fs-3x fw-bold"
                              data-kt-plan-price-month={999}
                              data-kt-plan-price-annual={9999}
                            >
                              999
                            </span>
                            <span className="fs-7 opacity-50">
                              /<span data-kt-element="period">Mon</span>
                            </span>
                          </div>
                          {/*end::Price*/}
                        </label>
                        {/*end::Tab link*/}
                        {/*begin::Tab link*/}
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_custom"
                        >
                          {/*end::Description*/}
                          <div className="d-flex align-items-center me-2">
                            {/*begin::Radio*/}
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultValue="custom"
                              />
                            </div>
                            {/*end::Radio*/}
                            {/*begin::Info*/}
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Custom
                              </div>
                              <div className="fw-semibold opacity-75">
                                Requet a custom license
                              </div>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Description*/}
                          {/*begin::Price*/}
                          <div className="ms-5">
                            <a href="#" className="btn btn-sm btn-success">
                              Contact Us
                            </a>
                          </div>
                          {/*end::Price*/}
                        </label>
                        {/*end::Tab link*/}
                      </div>
                      {/*end::Tabs*/}
                    </div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-lg-6">
                      {/*begin::Tab content*/}
                      <div className="tab-content rounded h-100 bg-light p-10">
                        {/*begin::Tab Pane*/}
                        <div
                          className="tab-pane fade show active"
                          id="kt_upgrade_plan_startup"
                        >
                          {/*begin::Heading*/}
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for 10+ team size and new startup
                            </div>
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Body*/}
                          <div className="pt-1">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 10 Active Users
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 30 Project Integrations
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Finance Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Accounting Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Network Platform
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Tab Pane*/}
                        {/*begin::Tab Pane*/}
                        <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                          {/*begin::Heading*/}
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for 100+ team size and grown company
                            </div>
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Body*/}
                          <div className="pt-1">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 10 Active Users
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 30 Project Integrations
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Finance Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Accounting Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Network Platform
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Tab Pane*/}
                        {/*begin::Tab Pane*/}
                        <div
                          className="tab-pane fade"
                          id="kt_upgrade_plan_enterprise"
                        >
                          {/*begin::Heading*/}
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for 1000+ team and enterpise
                            </div>
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Body*/}
                          <div className="pt-1">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 10 Active Users
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 30 Project Integrations
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Finance Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Accounting Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Network Platform
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Tab Pane*/}
                        {/*begin::Tab Pane*/}
                        <div className="tab-pane fade" id="kt_upgrade_plan_custom">
                          {/*begin::Heading*/}
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for corporations
                            </div>
                          </div>
                          {/*end::Heading*/}
                          {/*begin::Body*/}
                          <div className="pt-1">
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Users
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Project Integrations
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Finance Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Accounting Module
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Network Platform
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </div>
                            {/*end::Item*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Tab Pane*/}
                      </div>
                      {/*end::Tab content*/}
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Row*/}
                </div>
                {/*end::Plans*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-center flex-row-fluid pt-12">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="kt_modal_upgrade_plan_btn"
                  >
                    {/*begin::Indicator label*/}
                    <span className="indicator-label">Upgrade Plan</span>
                    {/*end::Indicator label*/}
                    {/*begin::Indicator progress*/}
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                    {/*end::Indicator progress*/}
                  </button>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Upgrade plan*/}
        {/*begin::Modal - Create App*/}
        <div
          className="modal fade"
          id="kt_modal_create_app"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-900px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2>Create App</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body py-lg-10 px-lg-10">
                {/*begin::Stepper*/}
                <div
                  className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                  id="kt_modal_create_app_stepper"
                >
                  {/*begin::Aside*/}
                  <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                    {/*begin::Nav*/}
                    <div className="stepper-nav ps-lg-10">
                      {/*begin::Step 1*/}
                      <div
                        className="stepper-item current"
                        data-kt-stepper-element="nav"
                      >
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">1</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Details</h3>
                            <div className="stepper-desc">Name your App</div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 1*/}
                      {/*begin::Step 2*/}
                      <div className="stepper-item" data-kt-stepper-element="nav">
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">2</span>
                          </div>
                          {/*begin::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Frameworks</h3>
                            <div className="stepper-desc">
                              Define your app framework
                            </div>
                          </div>
                          {/*begin::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 2*/}
                      {/*begin::Step 3*/}
                      <div className="stepper-item" data-kt-stepper-element="nav">
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">3</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Database</h3>
                            <div className="stepper-desc">
                              Select the app database type
                            </div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 3*/}
                      {/*begin::Step 4*/}
                      <div className="stepper-item" data-kt-stepper-element="nav">
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">4</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Billing</h3>
                            <div className="stepper-desc">
                              Provide payment details
                            </div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Line*/}
                        <div className="stepper-line h-40px" />
                        {/*end::Line*/}
                      </div>
                      {/*end::Step 4*/}
                      {/*begin::Step 5*/}
                      <div
                        className="stepper-item mark-completed"
                        data-kt-stepper-element="nav"
                      >
                        {/*begin::Wrapper*/}
                        <div className="stepper-wrapper">
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">5</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Completed</h3>
                            <div className="stepper-desc">Review and Submit</div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Step 5*/}
                    </div>
                    {/*end::Nav*/}
                  </div>
                  {/*begin::Aside*/}
                  {/*begin::Content*/}
                  <div className="flex-row-fluid py-lg-5 px-lg-15">
                    {/*begin::Form*/}
                    <form
                      className="form"
                      noValidate="novalidate"
                      id="kt_modal_create_app_form"
                    >
                      {/*begin::Step 1*/}
                      <div className="current" data-kt-stepper-element="content">
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                              <span className="required">App Name</span>
                              <i
                                className="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="Specify your unique app name"
                              />
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-solid"
                              name="name"
                              placeholder=""
                              defaultValue=""
                            />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">Category</span>
                              <i
                                className="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="Select your app category"
                              />
                            </label>
                            {/*end::Label*/}
                            {/*begin:Options*/}
                            <div className="fv-row">
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack mb-5 cursor-pointer">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-primary">
                                      {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                      <span className="svg-icon svg-icon-1 svg-icon-primary">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Quick Online Courses
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure is just one SEO
                                    </span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    defaultValue={1}
                                  />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack mb-5 cursor-pointer">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-danger">
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                      <span className="svg-icon svg-icon-1 svg-icon-danger">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <rect
                                            x={2}
                                            y={2}
                                            width={9}
                                            height={9}
                                            rx={2}
                                            fill="currentColor"
                                          />
                                          <rect
                                            opacity="0.3"
                                            x={13}
                                            y={2}
                                            width={9}
                                            height={9}
                                            rx={2}
                                            fill="currentColor"
                                          />
                                          <rect
                                            opacity="0.3"
                                            x={13}
                                            y={13}
                                            width={9}
                                            height={9}
                                            rx={2}
                                            fill="currentColor"
                                          />
                                          <rect
                                            opacity="0.3"
                                            x={2}
                                            y={13}
                                            width={9}
                                            height={9}
                                            rx={2}
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Face to Face Discussions
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure is just one
                                      aspect
                                    </span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    defaultValue={2}
                                  />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-success">
                                      {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                                      <span className="svg-icon svg-icon-1 svg-icon-success">
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z"
                                            fill="currentColor"
                                          />
                                          <path
                                            d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      {/*end::Svg Icon*/}
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bold fs-6">
                                      Full Intro Training
                                    </span>
                                    <span className="fs-7 text-muted">
                                      Creating a clear text structure copywriting
                                    </span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    defaultValue={3}
                                  />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                            </div>
                            {/*end:Options*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 1*/}
                      {/*begin::Step 2*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">Select Framework</span>
                              <i
                                className="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="Specify your apps framework"
                              />
                            </label>
                            {/*end::Label*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-warning">
                                    <i className="fab fa-html5 text-warning fs-2x" />
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">HTML5</span>
                                  <span className="fs-7 text-muted">
                                    Base Web Projec
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  defaultChecked="checked"
                                  name="framework"
                                  defaultValue={1}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="fab fa-react text-success fs-2x" />
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">ReactJS</span>
                                  <span className="fs-7 text-muted">
                                    Robust and flexible app framework
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  defaultValue={2}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <i className="fab fa-angular text-danger fs-2x" />
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Angular</span>
                                  <span className="fs-7 text-muted">
                                    Powerful data mangement
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  defaultValue={3}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer">
                              {/*begin:Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin:Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-primary">
                                    <i className="fab fa-vuejs text-primary fs-2x" />
                                  </span>
                                </span>
                                {/*end:Icon*/}
                                {/*begin:Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Vue</span>
                                  <span className="fs-7 text-muted">
                                    Lightweight and responsive framework
                                  </span>
                                </span>
                                {/*end:Info*/}
                              </span>
                              {/*end:Label*/}
                              {/*begin:Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="framework"
                                  defaultValue={4}
                                />
                              </span>
                              {/*end:Input*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 2*/}
                      {/*begin::Step 3*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="fv-row mb-10">
                            {/*begin::Label*/}
                            <label className="required fs-5 fw-semibold mb-2">
                              Database Name
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              type="text"
                              className="form-control form-control-lg form-control-solid"
                              name="dbname"
                              placeholder=""
                              defaultValue="master_db"
                            />
                            {/*end::Input*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                              <span className="required">Select Database Engine</span>
                              <i
                                className="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="Select your app database engine"
                              />
                            </label>
                            {/*end::Label*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin::Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin::Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="fas fa-database text-success fs-2x" />
                                  </span>
                                </span>
                                {/*end::Icon*/}
                                {/*begin::Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">MySQL</span>
                                  <span className="fs-7 text-muted">
                                    Basic MySQL database
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </span>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  defaultChecked="checked"
                                  defaultValue={1}
                                />
                              </span>
                              {/*end::Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer mb-5">
                              {/*begin::Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin::Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <i className="fab fa-google text-danger fs-2x" />
                                  </span>
                                </span>
                                {/*end::Icon*/}
                                {/*begin::Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Firebase</span>
                                  <span className="fs-7 text-muted">
                                    Google based app data management
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </span>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  defaultValue={2}
                                />
                              </span>
                              {/*end::Input*/}
                            </label>
                            {/*end::Option*/}
                            {/*begin:Option*/}
                            <label className="d-flex flex-stack cursor-pointer">
                              {/*begin::Label*/}
                              <span className="d-flex align-items-center me-2">
                                {/*begin::Icon*/}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-warning">
                                    <i className="fab fa-amazon text-warning fs-2x" />
                                  </span>
                                </span>
                                {/*end::Icon*/}
                                {/*begin::Info*/}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">DynamoDB</span>
                                  <span className="fs-7 text-muted">
                                    Amazon Fast NoSQL Database
                                  </span>
                                </span>
                                {/*end::Info*/}
                              </span>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="dbengine"
                                  defaultValue={3}
                                />
                              </span>
                              {/*end::Input*/}
                            </label>
                            {/*end::Option*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 3*/}
                      {/*begin::Step 4*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100">
                          {/*begin::Input group*/}
                          <div className="d-flex flex-column mb-7 fv-row">
                            {/*begin::Label*/}
                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                              <span className="required">Name On Card</span>
                              <i
                                className="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="Specify a card holder's name"
                              />
                            </label>
                            {/*end::Label*/}
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder=""
                              name="card_name"
                              defaultValue="Max Doe"
                            />
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="d-flex flex-column mb-7 fv-row">
                            {/*begin::Label*/}
                            <label className="required fs-6 fw-semibold form-label mb-2">
                              Card Number
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input wrapper*/}
                            <div className="position-relative">
                              {/*begin::Input*/}
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                placeholder="Enter card number"
                                name="card_number"
                                defaultValue="4111 1111 1111 1111"
                              />
                              {/*end::Input*/}
                              {/*begin::Card logos*/}
                              <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                <img
                                  src="assets/media/svg/card-logos/visa.svg"
                                  alt=""
                                  className="h-25px"
                                />
                                <img
                                  src="assets/media/svg/card-logos/mastercard.svg"
                                  alt=""
                                  className="h-25px"
                                />
                                <img
                                  src="assets/media/svg/card-logos/american-express.svg"
                                  alt=""
                                  className="h-25px"
                                />
                              </div>
                              {/*end::Card logos*/}
                            </div>
                            {/*end::Input wrapper*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="row mb-10">
                            {/*begin::Col*/}
                            <div className="col-md-8 fv-row">
                              {/*begin::Label*/}
                              <label className="required fs-6 fw-semibold form-label mb-2">
                                Expiration Date
                              </label>
                              {/*end::Label*/}
                              {/*begin::Row*/}
                              <div className="row fv-row">
                                {/*begin::Col*/}
                                <div className="col-6">
                                  <select
                                    name="card_expiry_month"
                                    className="form-select form-select-solid"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Month"
                                  >
                                    <option />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                  </select>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-6">
                                  <select
                                    name="card_expiry_year"
                                    className="form-select form-select-solid"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Year"
                                  >
                                    <option />
                                    <option value={2023}>2023</option>
                                    <option value={2024}>2024</option>
                                    <option value={2025}>2025</option>
                                    <option value={2026}>2026</option>
                                    <option value={2027}>2027</option>
                                    <option value={2028}>2028</option>
                                    <option value={2029}>2029</option>
                                    <option value={2030}>2030</option>
                                    <option value={2031}>2031</option>
                                    <option value={2032}>2032</option>
                                    <option value={2033}>2033</option>
                                  </select>
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-md-4 fv-row">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                <span className="required">CVV</span>
                                <i
                                  className="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Enter a card CVV code"
                                />
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input wrapper*/}
                              <div className="position-relative">
                                {/*begin::Input*/}
                                <input
                                  type="text"
                                  className="form-control form-control-solid"
                                  minLength={3}
                                  maxLength={4}
                                  placeholder="CVV"
                                  name="card_cvv"
                                />
                                {/*end::Input*/}
                                {/*begin::CVV icon*/}
                                <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                  {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                                  <span className="svg-icon svg-icon-2hx">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M22 7H2V11H22V7Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}
                                </div>
                                {/*end::CVV icon*/}
                              </div>
                              {/*end::Input wrapper*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Label*/}
                            <div className="me-5">
                              <label className="fs-6 fw-semibold form-label">
                                Save Card for further billing?
                              </label>
                              <div className="fs-7 fw-semibold text-muted">
                                If you need more info, please check budget planning
                              </div>
                            </div>
                            {/*end::Label*/}
                            {/*begin::Switch*/}
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                                defaultChecked="checked"
                              />
                              <span className="form-check-label fw-semibold text-muted">
                                Save Card
                              </span>
                            </label>
                            {/*end::Switch*/}
                          </div>
                          {/*end::Input group*/}
                        </div>
                      </div>
                      {/*end::Step 4*/}
                      {/*begin::Step 5*/}
                      <div data-kt-stepper-element="content">
                        <div className="w-100 text-center">
                          {/*begin::Heading*/}
                          <h1 className="fw-bold text-dark mb-3">Release!</h1>
                          {/*end::Heading*/}
                          {/*begin::Description*/}
                          <div className="text-muted fw-semibold fs-3">
                            Submit your app to kickstart your project.
                          </div>
                          {/*end::Description*/}
                          {/*begin::Illustration*/}
                          <div className="text-center px-4 py-15">
                            <img
                              src="assets/media/illustrations/sigma-1/9.png"
                              alt=""
                              className="mw-100 mh-300px"
                            />
                          </div>
                          {/*end::Illustration*/}
                        </div>
                      </div>
                      {/*end::Step 5*/}
                      {/*begin::Actions*/}
                      <div className="d-flex flex-stack pt-10">
                        {/*begin::Wrapper*/}
                        <div className="me-2">
                          <button
                            type="button"
                            className="btn btn-lg btn-light-primary me-3"
                            data-kt-stepper-action="previous"
                          >
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                            <span className="svg-icon svg-icon-3 me-1">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  opacity="0.5"
                                  x={6}
                                  y={11}
                                  width={13}
                                  height={2}
                                  rx={1}
                                  fill="currentColor"
                                />
                                <path
                                  d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}Back
                          </button>
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Wrapper*/}
                        <div>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-stepper-action="submit"
                          >
                            <span className="indicator-label">
                              Submit
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-3 ms-2 me-0">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.5"
                                    x={18}
                                    y={13}
                                    width={13}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-180 18 13)"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                            </span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            data-kt-stepper-action="next"
                          >
                            Continue
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                            <span className="svg-icon svg-icon-3 ms-1 me-0">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  opacity="0.5"
                                  x={18}
                                  y={13}
                                  width={13}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-180 18 13)"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Actions*/}
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Stepper*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Create App*/}
        {/*begin::Modal - Users Search*/}
        <div
          className="modal fade"
          id="kt_modal_users_search"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog modal-dialog-centered mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header pb-0 border-0 justify-content-end">
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*begin::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                {/*begin::Content*/}
                <div className="text-center mb-13">
                  <h1 className="mb-3">Search Users</h1>
                  <div className="text-muted fw-semibold fs-5">
                    Invite Collaborators To Your Project
                  </div>
                </div>
                {/*end::Content*/}
                {/*begin::Search*/}
                <div
                  id="kt_modal_users_search_handler"
                  data-kt-search-keypress="true"
                  data-kt-search-min-length={2}
                  data-kt-search-enter="enter"
                  data-kt-search-layout="inline"
                >
                  {/*begin::Form*/}
                  <form
                    data-kt-search-element="form"
                    className="w-100 position-relative mb-5"
                    autoComplete="off"
                  >
                    {/*begin::Hidden input(Added to disable form autocomplete)*/}
                    <input type="hidden" />
                    {/*end::Hidden input*/}
                    {/*begin::Icon*/}
                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height={2}
                          rx={1}
                          transform="rotate(45 17.0365 15.1223)"
                          fill="currentColor"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    {/*end::Icon*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid px-15"
                      name="search"
                      defaultValue=""
                      placeholder="Search by username, full name or email..."
                      data-kt-search-element="input"
                    />
                    {/*end::Input*/}
                    {/*begin::Spinner*/}
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                      data-kt-search-element="spinner"
                    >
                      <span className="spinner-border h-15px w-15px align-middle text-muted" />
                    </span>
                    {/*end::Spinner*/}
                    {/*begin::Reset*/}
                    <span
                      className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                      data-kt-search-element="clear"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                      <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x={6}
                            y="17.3137"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-45 6 17.3137)"
                            fill="currentColor"
                          />
                          <rect
                            x="7.41422"
                            y={6}
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(45 7.41422 6)"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                    {/*end::Reset*/}
                  </form>
                  {/*end::Form*/}
                  {/*begin::Wrapper*/}
                  <div className="py-5">
                    {/*begin::Suggestions*/}
                    <div data-kt-search-element="suggestions">
                      {/*begin::Heading*/}
                      <h3 className="fw-semibold mb-5">Recently searched:</h3>
                      {/*end::Heading*/}
                      {/*begin::Users*/}
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Emma Smith
                            </span>
                            <span className="badge badge-light">Art Director</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              M
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Melody Macy
                            </span>
                            <span className="badge badge-light">
                              Marketing Analytic
                            </span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                            <span className="badge badge-light">
                              Software Enginer
                            </span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                            <span className="badge badge-light">Web Developer</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                            <span className="badge badge-light">UI/UX Designer</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}
                    </div>
                    {/*end::Suggestions*/}
                    {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                    <div data-kt-search-element="results" className="d-none">
                      {/*begin::Users*/}
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={0}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='0']"
                                defaultValue={0}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Smith
                              </a>
                              <div className="fw-semibold text-muted">
                                smith@kpmg.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={1}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='1']"
                                defaultValue={1}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                M
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Melody Macy
                              </a>
                              <div className="fw-semibold text-muted">
                                melody@altbox.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={2}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='2']"
                                defaultValue={2}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Max Smith
                              </a>
                              <div className="fw-semibold text-muted">max@kt.com</div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={3}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='3']"
                                defaultValue={3}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Sean Bean
                              </a>
                              <div className="fw-semibold text-muted">
                                sean@dellito.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={4}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='4']"
                                defaultValue={4}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Brian Cox
                              </a>
                              <div className="fw-semibold text-muted">
                                brian@exchange.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={5}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='5']"
                                defaultValue={5}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                C
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Mikaela Collins
                              </a>
                              <div className="fw-semibold text-muted">
                                mik@pex.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={6}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='6']"
                                defaultValue={6}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Francis Mitcham
                              </a>
                              <div className="fw-semibold text-muted">
                                f.mit@kpmg.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={7}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='7']"
                                defaultValue={7}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                O
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Olivia Wild
                              </a>
                              <div className="fw-semibold text-muted">
                                olivia@corpmail.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={8}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='8']"
                                defaultValue={8}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                N
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Neil Owen
                              </a>
                              <div className="fw-semibold text-muted">
                                owen.neil@gmail.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={9}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='9']"
                                defaultValue={9}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Dan Wilson
                              </a>
                              <div className="fw-semibold text-muted">
                                dam@consilting.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={10}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='10']"
                                defaultValue={10}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                E
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Bold
                              </a>
                              <div className="fw-semibold text-muted">
                                emma@intenso.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={11}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='11']"
                                defaultValue={11}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ana Crown
                              </a>
                              <div className="fw-semibold text-muted">
                                ana.cf@limtel.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={12}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='12']"
                                defaultValue={12}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-info text-info fw-semibold">
                                A
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Robert Doe
                              </a>
                              <div className="fw-semibold text-muted">
                                robert@benko.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={13}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='13']"
                                defaultValue={13}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                John Miller
                              </a>
                              <div className="fw-semibold text-muted">
                                miller@mapple.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={14}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='14']"
                                defaultValue={14}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-success text-success fw-semibold">
                                L
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Lucy Kunic
                              </a>
                              <div className="fw-semibold text-muted">
                                lucy.m@fentech.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={15}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='15']"
                                defaultValue={15}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ethan Wilder
                              </a>
                              <div className="fw-semibold text-muted">
                                ethan@loop.com.au
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={16}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='16']"
                                defaultValue={16}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                O
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Olivia Wild
                              </a>
                              <div className="fw-semibold text-muted">
                                olivia@corpmail.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}
                      {/*begin::Actions*/}
                      <div className="d-flex flex-center mt-15">
                        <button
                          type="reset"
                          id="kt_modal_users_search_reset"
                          data-bs-dismiss="modal"
                          className="btn btn-active-light me-3"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="kt_modal_users_search_submit"
                          className="btn btn-primary"
                        >
                          Add Selected Users
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Results*/}
                    {/*begin::Empty*/}
                    <div
                      data-kt-search-element="empty"
                      className="text-center d-none"
                    >
                      {/*begin::Message*/}
                      <div className="fw-semibold py-10">
                        <div className="text-gray-600 fs-3 mb-2">No users found</div>
                        <div className="text-muted fs-6">
                          Try to search by username, full name or email...
                        </div>
                      </div>
                      {/*end::Message*/}
                      {/*begin::Illustration*/}
                      <div className="text-center px-5">
                        <img
                          src="assets/media/illustrations/sigma-1/1.png"
                          alt=""
                          className="w-100 h-200px h-sm-325px"
                        />
                      </div>
                      {/*end::Illustration*/}
                    </div>
                    {/*end::Empty*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Search*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
        {/*end::Modal - Users Search*/}
        {/*begin::Modal - Invite Friends*/}
        <div
          className="modal fade"
          id="kt_modal_invite_friends"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/*begin::Modal dialog*/}
          <div className="modal-dialog mw-650px">
            {/*begin::Modal content*/}
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header pb-0 border-0 justify-content-end">
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*begin::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                {/*begin::Heading*/}
                <div className="text-center mb-13">
                  {/*begin::Title*/}
                  <h1 className="mb-3">Invite a Friend</h1>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="text-muted fw-semibold fs-5">
                    If you need more info, please check out
                    <a href="#" className="link-primary fw-bold">
                      FAQ Page
                    </a>
                    .
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Heading*/}
                {/*begin::Google Contacts Invite*/}
                <div className="btn btn-light-primary fw-bold w-100 mb-8">
                  <img
                    alt="Logo"
                    src="assets/media/svg/brand-logos/google-icon.svg"
                    className="h-20px me-3"
                  />
                  Invite Gmail Contacts
                </div>
                {/*end::Google Contacts Invite*/}
                {/*begin::Separator*/}
                <div className="separator d-flex flex-center mb-8">
                  <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
                    or
                  </span>
                </div>
                {/*end::Separator*/}
                {/*begin::Textarea*/}
                <textarea
                  className="form-control form-control-solid mb-8"
                  rows={3}
                  placeholder="Type or paste emails here"
                  defaultValue={""}
                />
                {/*end::Textarea*/}
                {/*begin::Users*/}
                <div className="mb-10">
                  {/*begin::Heading*/}
                  <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                  {/*end::Heading*/}
                  {/*begin::List*/}
                  <div className="mh-300px scroll-y me-n7 pe-7">
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Smith
                          </a>
                          <div className="fw-semibold text-muted">smith@kpmg.com</div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            M
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Melody Macy
                          </a>
                          <div className="fw-semibold text-muted">
                            melody@altbox.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Max Smith
                          </a>
                          <div className="fw-semibold text-muted">max@kt.com</div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Sean Bean
                          </a>
                          <div className="fw-semibold text-muted">
                            sean@dellito.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Brian Cox
                          </a>
                          <div className="fw-semibold text-muted">
                            brian@exchange.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-warning text-warning fw-semibold">
                            C
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Mikaela Collins
                          </a>
                          <div className="fw-semibold text-muted">mik@pex.com</div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Francis Mitcham
                          </a>
                          <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            O
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Olivia Wild
                          </a>
                          <div className="fw-semibold text-muted">
                            olivia@corpmail.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-primary text-primary fw-semibold">
                            N
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Neil Owen
                          </a>
                          <div className="fw-semibold text-muted">
                            owen.neil@gmail.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Dan Wilson
                          </a>
                          <div className="fw-semibold text-muted">
                            dam@consilting.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            E
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Bold
                          </a>
                          <div className="fw-semibold text-muted">
                            emma@intenso.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ana Crown
                          </a>
                          <div className="fw-semibold text-muted">
                            ana.cf@limtel.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-info text-info fw-semibold">
                            A
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Robert Doe
                          </a>
                          <div className="fw-semibold text-muted">
                            robert@benko.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            John Miller
                          </a>
                          <div className="fw-semibold text-muted">
                            miller@mapple.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-success text-success fw-semibold">
                            L
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Lucy Kunic
                          </a>
                          <div className="fw-semibold text-muted">
                            lucy.m@fentech.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ethan Wilder
                          </a>
                          <div className="fw-semibold text-muted">
                            ethan@loop.com.au
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-success text-success fw-semibold">
                            L
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Lucy Kunic
                          </a>
                          <div className="fw-semibold text-muted">
                            lucy.m@fentech.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::List*/}
                </div>
                {/*end::Users*/}
                {/*begin::Notice*/}
                <div className="d-flex flex-stack">
                  {/*begin::Label*/}
                  <div className="me-5 fw-semibold">
                    <label className="fs-6">Adding Users by Team Members</label>
                    <div className="fs-7 text-muted">
                      If you need more info, please check budget planning
                    </div>
                  </div>
                  {/*end::Label*/}
                  {/*begin::Switch*/}
                  <label className="form-check form-switch form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={1}
                      defaultChecked="checked"
                    />
                    <span className="form-check-label fw-semibold text-muted">
                      Allowed
                    </span>
                  </label>
                  {/*end::Switch*/}
                </div>
                {/*end::Notice*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
          {/*end::Modal dialog*/}
        </div>
      </div>

    </>

  )
}