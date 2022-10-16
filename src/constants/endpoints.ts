const baseUrl = process.env.REACT_APP_NOT_SECRET_BASE_URL;

const endpoints = {
  baseUrl,
  login: `${baseUrl}/token/`,
  sessionsList: `${baseUrl}/sessions`,
  me: `${baseUrl}/lawyers/me`,
  clientList: `${baseUrl}/clients/options`,
  courts: `${baseUrl}/courts`,
  opponents: `${baseUrl}/opponents/options`,
  addOpponents: `${baseUrl}/opponents`,
  branches: `${baseUrl}/branches`,
  caseCategories: `${baseUrl}/case-categories`,
  addClient: `${baseUrl}/clients`,
  addCourt: `${baseUrl}/courts`,
  caseType: `${baseUrl}/case-types`,
  /* start cases */
  addCase: `${baseUrl}/cases`,
  cases: `${baseUrl}/cases`,
  casesByid: (caseId: any) => `${baseUrl}/cases/${caseId}/`,
  othersCase: `${baseUrl}/cases/others`,
  casesAndSessionsAssignMe: `${baseUrl}/cases/sessions/assign/me`,
  casesAttachmentsByCaseId: (caseId: any) =>
    `${baseUrl}/cases/${caseId}/attachments`,
  deleteCasesAttachments: (caseId: any, id: any) =>
    `${baseUrl}/cases/${caseId}/attachments/${id}`,
  caseTeam: (caseId: any) => `${baseUrl}/cases/${caseId}/team`,
  sessionsForCase: (case_pk: any) => `${baseUrl}/cases/${case_pk}/sessions`,
  updateSessionForCase: (case_pk: any, session_pk: any) =>
    `${baseUrl}/cases/${case_pk}/sessions/${session_pk}`,
  createReplaySessionForCase: (case_pk: any, session_pk: any) =>
    `${baseUrl}/cases/${case_pk}/sessions/${session_pk}`,
  /* end cases */
  /* start sessions */
  sessionsListFrom: `${baseUrl}/sessions/assign`,
  sessionsAssignRequests: `${baseUrl}/sessions/assign/requests`,
  addSessionsAssign: (session_pk: any) =>
    `${baseUrl}/sessions/${session_pk}/assign`,
  updateSessionAssign: (id: any) => `${baseUrl}/sessions/assign/${id}/complete`,
  addSessionAssign: (id: any) =>
    `${baseUrl}/sessions/assign/${id}/multi-assign`,
  updateSessionsAssignRequests: (id: any) =>
    `${baseUrl}/sessions/assign/${id}/requests`,
  /* end sessions */
};

export default endpoints;
