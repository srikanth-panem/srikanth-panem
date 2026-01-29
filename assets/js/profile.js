// Profile links used across the site
const PROFILE = {
  linkedin: "http://linkedin.com/in/panem-srikanth-a2582a236",
  github: "https://github.com/srikanth-panem",
  medium: "https://medium.com/@spanem90",
  resume: "https://docs.google.com/document/d/1FsWNV2OtMperVXdxdpTyK9_BwsE89hGbpbi3oRVgRTY/edit?tab=t.0"
};

function setHref(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.href = url;
}

document.addEventListener("DOMContentLoaded", () => {
  setHref("linkedinLink", PROFILE.linkedin);
  setHref("githubLink", PROFILE.github);
  setHref("mediumLink", PROFILE.medium);
  setHref("resumeLink", PROFILE.resume);

  setHref("linkedinLink2", PROFILE.linkedin);
  setHref("githubLink2", PROFILE.github);
  setHref("mediumLink2", PROFILE.medium);
  setHref("resumeLink2", PROFILE.resume);
});
