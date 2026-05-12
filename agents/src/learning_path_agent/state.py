from typing import Any, Dict, List, Optional, TypedDict


class LearningPathState(TypedDict):
    # Input
    user_id: str
    target_role: str
    company_type: str
    experience_level: str
    weekly_hours: int
    current_skills: List[str]
    domain_slug: str

    # Working state
    messages: List[Any]
    domain_info: Optional[Dict]
    skill_gap: Optional[Dict]
    generated_roadmap: Optional[Dict]
    error: Optional[str]

    # Output
    final_roadmap: Optional[Dict]
    status: str  # "starting"|"running"|"complete"|"failed"
