import { useQuery } from "@tanstack/react-query";
import { countMessagesPending, countNewCustomer, countNewTicketsSupport, countRecurrenceCustomerMonth } from "../services/whatsappService";
import { getLastMessages } from "../services/messageService";
import useScriptLoader from "../hooks/scriptLoader";

const Dashboard = () => {
  useScriptLoader();

  const newCustomerQuery = useQuery({
    queryKey: ["countNewCustomer"],
    queryFn: countNewCustomer,
  });

  const countRecurrenceCustomerMonthQuery = useQuery({
    queryKey: ["countRecurrenceCustomerMonth"],
    queryFn: countRecurrenceCustomerMonth,
  });

  const countNewTicketsSupportQuery = useQuery({
    queryKey: ["countNewTicketsSupport"],
    queryFn: countNewTicketsSupport,
  });

  const countMessagesPendingQuery = useQuery({
    queryKey: ["countMessagesPending"],
    queryFn: countMessagesPending,
  });

  const getLastMessagesQuery = useQuery({
    queryKey: ["getLastMessages"],
    queryFn: getLastMessages,
  });

  return (
    <div className="main-content app-content">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between my-4 page-header-breadcrumb flex-wrap gap-2">
          <div>
            <p className="fw-medium fs-20 mb-0">Seja bem-vindo, InnovaSfera</p>
            <p className="fs-13 text-muted mb-0">
              Painel automação Bot InnovaSfera{" "}
            </p>
          </div>
          <div className="btn-list"></div>
        </div>
        <div className="row">
          <div className="col-md-12 col-xl-12">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-xl-3">
                <div className="card custom-card overflow-hidden">
                  <div className="card-body p-0">
                    <div className="mb-2 p-3 pb-0">
                      <div className="flex-fill fs-15">Novos Leads</div>
                    </div>
                    <div className="d-flex align-items-center ps-3">
                      <div className="flex-fill">
                        <div className="fs-25 fw-normal mb-2">{newCustomerQuery?.data}</div>
                        {/* <p className="mb-0">
                          <i className="ri-arrow-up-line text-primary fs-15 align-middle"></i>
                          <span className="text-primary fs-12">
                            26.35% ultimo mês
                          </span>
                        </p> */}
                      </div>
                      <div
                        id="sales-card"
                        className="crm-card-chart"
                        style={{ minHeight: "115px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3">
                <div className="card custom-card overflow-hidden">
                  <div className="card-body p-0">
                    <div className="mb-2 p-3 pb-0">
                      <div className="flex-fill fs-15">Recorrência Cliente</div>
                    </div>
                    <div className="d-flex align-items-center ps-3">
                      <div className="flex-fill">
                        <div className="fs-25 fw-normal mb-2">{countRecurrenceCustomerMonthQuery?.data}</div>
                        {/* <p className="mb-0">
                          <i className="ri-arrow-down-line text-danger fs-15 align-middle"></i>
                          <span className="text-danger fs-12">
                            11.35% ultimo mês
                          </span>
                        </p> */}
                      </div>
                      <div
                        id="revenue-card"
                        className="crm-card-chart"
                        style={{ minHeight: "115px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3">
                <div className="card custom-card overflow-hidden">
                  <div className="card-body p-0">
                    <div className="mb-2 p-3 pb-0">
                      <div className="flex-fill fs-15">Novos chamados</div>
                    </div>
                    <div className="d-flex align-items-center ps-3">
                      <div className="flex-fill">
                        <div className="fs-25 fw-normal mb-2">{countNewTicketsSupportQuery?.data}</div>
                        {/* <p className="mb-0">
                          <i className="ri-arrow-up-line text-secondary fs-15 align-middle"></i>
                          <span className="text-secondary fs-12">
                            26.35% ultimo mês
                          </span>
                        </p> */}
                      </div>
                      <div
                        id="customers-card"
                        className="crm-card-chart"
                        style={{ minHeight: "115px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3">
                <div className="card custom-card overflow-hidden">
                  <div className="card-body p-0">
                    <div className="mb-2 p-3 pb-0">
                      <div className="flex-fill fs-15">Conversas pendentes</div>
                    </div>
                    <div className="d-flex align-items-center ps-3">
                      <div className="flex-fill">
                        <div className="fs-25 fw-normal mb-2">{countMessagesPendingQuery?.data}</div>
                        {/* <p className="mb-0">
                          <i className="ri-arrow-up-line text-info fs-15 align-middle"></i>
                          <span className="text-info fs-12">
                            16.35% ultimo mês
                          </span>
                        </p> */}
                      </div>
                      <div
                        id="orders-card"
                        className="crm-card-chart"
                        style={{ minHeight: "115px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-xl-12 col-xxl-12">
            <div className="card custom-card overflow-hidden">
              <div className="card-header justify-content-between">
                <div className="card-title">Conversas Whatsapp</div>
                <div className="dropdown">
                  <a
                    href="#"
                    className="btn btn-primary-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ordenação
                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Encerradas
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Em acompanhamento
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Pendentes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table text-nowrap table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">Nr. Cliente</th>
                        <th className="crm-table-th1">Cliente</th>
                        <th className="crm-table-th2">Nr. Protocolo</th>
                        <th className="crm-table-th2">Data</th>
                        <th className="crm-table-th2">Serviço</th>
                        <th className="crm-table-th2">Status</th>
                        <th className="crm-table-th2">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getLastMessagesQuery.data?.map((item, key) => (
                          <tr key={key}>
                          <td className="text-center">{item.phoneNumber}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="mb-0 fs-14">{item.customerName}</h6>
                                {/* <p className="mb-0 text-muted">
                                  {item.}
                                </p> */}
                              </div>
                            </div>
                          </td>
                          <td>{item.protocolNumber}</td>
                          <td>{item.dateMessage}</td>
                          <td>{item.service}</td>
                          <td>
                            <span className="badge bg-success-transparent ps-3 fs-11 order-status complete">
                              {item.status}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                aria-label="anchor"
                                href="#"
                                className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-pencil-line"></i>
                              </a>
                              <a
                                aria-label="anchor"
                                href="#"
                                className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Download"
                              >
                                <i className="ri-download-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
