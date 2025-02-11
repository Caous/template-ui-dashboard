const Dashboard = () => {
return (
    <div className="main-content app-content">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between my-4 page-header-breadcrumb flex-wrap gap-2">
          <div>
            <p className="fw-medium fs-20 mb-0">Seja bem-vindo, InnovaSfera</p>
            <p className="fs-13 text-muted mb-0">
              Painel automação Bot InnovaSfera </p>
          </div>
          <div className="btn-list">
          </div>
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
                        <div className="fs-25 fw-normal mb-2">98+</div>
                        <p className="mb-0">
                          <i className="ri-arrow-up-line text-primary fs-15 align-middle"></i>
                          <span className="text-primary fs-12">
                            26.35% ultimo mês</span>
                        </p>
                      </div>
                      <div id="sales-card" className="crm-card-chart" style={{minHeight: '115px'}}>
                        
                      </div>
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
                        <div className="fs-25 fw-normal mb-2">2</div>
                        <p className="mb-0">
                          <i className="ri-arrow-down-line text-danger fs-15 align-middle"></i>
                          <span className="text-danger fs-12">
                            11.35% ultimo mês</span>
                        </p>
                      </div>
                      <div id="revenue-card" className="crm-card-chart" style={{minHeight: '115px'}}>
                    
                      </div>
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
                        <div className="fs-25 fw-normal mb-2">8+</div>
                        <p className="mb-0">
                          <i className="ri-arrow-up-line text-secondary fs-15 align-middle"></i>
                          <span className="text-secondary fs-12">
                            26.35% ultimo mês</span>
                        </p>
                      </div>
                      <div id="customers-card" className="crm-card-chart" style={{minHeight: '115px'}}>
                        
                      </div>
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
                        <div className="fs-25 fw-normal mb-2">10+</div>
                        <p className="mb-0">
                          <i className="ri-arrow-up-line text-info fs-15 align-middle"></i>
                          <span className="text-info fs-12">
                            16.35% ultimo mês</span>
                        </p>
                      </div>
                      <div id="orders-card" className="crm-card-chart" style={{minHeight: '115px'}}>
                        
                      </div>
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
                  <a href="javascript:void(0);" className="btn btn-primary-light" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Ordenação
                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">Encerradas</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">Em acompanhamento</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">Pendentes</a>
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
                      <tr>
                        <td className="text-center">(11) 99999-9999</td>
                        <td>
                          <div className="d-flex align-items-center">

                            <div>
                              <h6 className="mb-0 fs-14">Christopher</h6>
                              <p className="mb-0 text-muted">
                                Christopher@mailer.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>#011023-0N3</td>
                        <td>06/02/2025</td>
                        <td>Suporte técnico</td>
                        <td>
                          <span className="badge bg-success-transparent ps-3 fs-11 order-status complete">
                            Encerrado
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i
                                className="ri-pencil-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download"><i
                                className="ri-download-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">(11) 99999-9999</td>
                        <td>
                          <div className="d-flex align-items-center">

                            <div>
                              <h6 className="mb-0 fs-14">William</h6>
                              <p className="mb-0 text-muted">
                                William@mailer.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>#023023-0D6</td>
                        <td>05/02/2025</td>
                        <td>Orçamento sistema</td>
                        <td>
                          <span className="badge bg-danger-transparent ps-3 fs-11 order-status cancel">
                            Cancelado
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i
                                className="ri-pencil-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download"><i
                                className="ri-download-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">(11) 99999-9999</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <h6 className="mb-0 fs-14">Isabella</h6>
                              <p className="mb-0 text-muted">
                                Isabella@mailer.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>#019023-0S2</td>
                        <td>25/01/2025</td>
                        <td>Suporte técnico</td>
                        <td>
                          <span className="badge bg-warning-transparent ps-3 fs-11 order-status pending">
                            Pendente
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i
                                className="ri-pencil-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download"><i
                                className="ri-download-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">(11) 99999-9999</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              <h6 className="mb-0 fs-14">Richard</h6>
                              <p className="mb-0 text-muted">
                                Richard@mailer.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>#029023-0K5</td>
                        <td>25/01/2025</td>
                        <td>Dúvida suporte</td>
                        <td>
                          <span className="badge bg-success-transparent ps-3 fs-11 order-status complete">
                            Encerrado
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i
                                className="ri-pencil-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download"><i
                                className="ri-download-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">(11) 99999-9999</td>
                        <td>
                          <div className="d-flex align-items-center">

                            <div>
                              <h6 className="mb-0 fs-14">Michael</h6>
                              <p className="mb-0 text-muted">
                                Michael@mailer.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>#082023-0R6</td>
                        <td>05/01/2025</td>
                        <td>InnovaStudio</td>
                        <td>
                          <span className="badge bg-danger-transparent ps-3 fs-11 order-status cancel">
                            Cancelado
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i
                                className="ri-pencil-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download"><i
                                className="ri-download-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">(11) 99999-9999</td>
                        <td>
                          <div className="d-flex align-items-center">

                            <div>
                              <h6 className="mb-0 fs-14">Scarlett</h6>
                              <p className="mb-0 text-muted">
                                Scarlett@mailer.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>#091223-0Z7</td>
                        <td>31/01/2025</td>
                        <td>Suporte técnico</td>
                        <td>
                          <span className="badge bg-warning-transparent ps-3 fs-11 order-status pending">
                            Pendentes
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i
                                className="ri-pencil-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download"><i
                                className="ri-download-line"></i></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">(11) 99999-9999</td>
                        <td className="border-bottom-0">
                          <div className="d-flex align-items-center">

                            <div>
                              <h6 className="mb-0 fs-14">Olivia</h6>
                              <p className="mb-0 text-muted">Olivia@mailer.com</p>
                            </div>
                          </div>
                        </td>
                        <td className="border-bottom-0">#045023-0L2</td>
                        <td>25/01/2025</td>
                        <td>Suporte técnico</td>
                        <td className="border-bottom-0">
                          <span className="badge bg-success-transparent ps-3 fs-11 order-status complete">
                            Encerrado
                          </span>
                        </td>
                        <td className="border-bottom-0">
                          <div className="d-flex align-items-center">
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary-light btn-wave me-3 waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i
                                className="ri-pencil-line"></i></a>
                            <a aria-label="anchor" href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"
                              data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download"><i
                                className="ri-download-line"></i></a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)
}

export default Dashboard;