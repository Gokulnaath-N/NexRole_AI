from langgraph.graph import END, StateGraph

from .nodes import (
    analyze_skill_gap,
    fetch_domain_info,
    finalize_roadmap,
    generate_roadmap,
    should_continue,
)
from .state import LearningPathState


def build_learning_path_graph():
    workflow = StateGraph(LearningPathState)

    workflow.add_node("fetch_domain", fetch_domain_info)
    workflow.add_node("analyze_gap", analyze_skill_gap)
    workflow.add_node("generate_roadmap", generate_roadmap)
    workflow.add_node("finalize", finalize_roadmap)

    workflow.set_entry_point("fetch_domain")

    workflow.add_conditional_edges(
        "fetch_domain",
        should_continue,
        {"continue": "analyze_gap", "end": END},
    )
    workflow.add_conditional_edges(
        "analyze_gap",
        should_continue,
        {"continue": "generate_roadmap", "end": END},
    )
    workflow.add_conditional_edges(
        "generate_roadmap",
        should_continue,
        {"continue": "finalize", "end": END},
    )
    workflow.add_edge("finalize", END)

    return workflow.compile()


learning_path_graph = build_learning_path_graph()
