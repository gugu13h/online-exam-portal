function removeSubmissionById(submissions, submissionId) {
  return (submissions || []).filter(function (submission) {
    return submission && submission.id !== submissionId;
  });
}

if (typeof window !== 'undefined') {
  window.removeSubmissionById = removeSubmissionById;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { removeSubmissionById };
}
