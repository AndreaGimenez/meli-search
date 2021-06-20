const parseCategory = (data) => data.path_from_root.map(parent => parent.name);

module.exports = {
    parseCategory
};
